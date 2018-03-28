var test = require("tape");
import branch from "../src/branch";
import walker from "../src/walker";
import { fpConfig } from "../src/walker";

test("walker should pass default config tests", function(t) {
  t.plan(21);

  let walk = walker();

  t.equal(walk("(2=2)"), "(2 = 2)");
  t.equal(walk("-2"), "-2");
  t.equal(walk("2 = 2"), "2 = 2");
  t.equal(walk("2<>2"), "2 <> 2");
  t.equal(walk("2>2"), "2 > 2");
  t.equal(walk("2>=2"), "2 >= 2");
  t.equal(walk("2  < 2"), "2 < 2");
  t.equal(walk("2 <=   2"), "2 <= 2");
  t.equal(walk("2+   2"), "2 + 2");
  t.equal(walk("2   -2"), "2 - 2");
  t.equal(walk("2     *2"), "2 * 2");
  t.equal(walk("2/2"), "2 / 2");
  t.equal(walk("2^2"), "2 ^ 2");
  t.equal(walk('"a" & "b"'), '"a" & "b"');
  t.equal(walk("@foo1"), "@foo1");

  t.equal(walk("{2,2}"), "{2,2}");
  t.equal(walk("{2;2}"), "{{2},{2}}");
  t.equal(walk("{{2},{2}}"), "{{2},{2}}");
  t.equal(walk("{1;2;3;4;5;6}"), "{{1},{2},{3},{4},{5},{6}}");
  t.equal(walk("{1,2,3;4,5,6}"), "{{1,2,3},{4,5,6}}");
  t.equal(walk("and(true,false,true)"), "AND(TRUE, FALSE, TRUE)");
});

test("walker should pass fp config tests", function(t) {
  t.plan(22);

  let walk = walker(fpConfig);
  t.equal(walk("(2=2)"), "(EQ(2, 2))");
  t.equal(walk("-2"), "MINUS(2)");
  t.equal(walk("2 = 1"), "EQ(2, 1)");
  t.equal(walk("2<>1"), "NE(2, 1)");
  t.equal(walk("2>1"), "GT(2, 1)");
  t.equal(walk("2>=1"), "GTE(2, 1)");
  t.equal(walk("2  < 2"), "LT(2, 2)");
  t.equal(walk("2 <=   2"), "LTE(2, 2)");
  t.equal(walk("2+   2"), "ADD(2, 2)");
  t.equal(walk("2   -2"), "SUBTRACT(2, 2)");
  t.equal(walk("2     *2"), "MULTIPLY(2, 2)");
  t.equal(walk("2/2"), "DIVIDE(2, 2)");
  t.equal(walk("2^2"), "POWER(2, 2)");
  t.equal(walk('"a" & "b"'), 'CONCATENATE("a", "b")');
  t.equal(walk("@foo1"), "@foo1");

  t.equal(walk("{2,2}"), "{2,2}");
  t.equal(walk("{2;2}"), "{{2},{2}}");
  t.equal(walk("{1;2;3;4;5;6}"), "{{1},{2},{3},{4},{5},{6}}");
  t.equal(walk(walk("{{1},{2},{3},{4},{5},{6}}")), "{{1},{2},{3},{4},{5},{6}}");

  t.equal(walk("{1,2,3;4,5,6}"), "{{1,2,3},{4,5,6}}");
  t.equal(walk("{{1,2,3},{4,5,6}}"), "{{1,2,3},{4,5,6}}");

  t.equal(
    walk(walk(walk("and(or(status=1),false,true)"))), // should produce same output each call
    "AND(OR(EQ(status, 1)), FALSE, TRUE)"
  );
});

test("walker should pass custom config tests", function(t) {
  t.plan(20);

  let config = Object.assign({}, fpConfig, {
    renderArray: items => "[" + items.map(walk) + "]",
    renderValue: (config, { subtype, items, value }, depth) => {
      return branch(
        subtype === "string",
        () => `"${value}"`,
        subtype === "number",
        () => `${value}`,
        subtype === "boolean",
        () => (value ? "true" : "false"),
        subtype === "array",
        () => config.renderArray(items)
      );
    }
  });
  let walk = walker(config);
  t.equal(walk("(2=2)"), "(EQ(2, 2))");
  t.equal(walk("-2"), "MINUS(2)");
  t.equal(walk("2 = 1"), "EQ(2, 1)");
  t.equal(walk("2<>1"), "NE(2, 1)");
  t.equal(walk("2>1"), "GT(2, 1)");
  t.equal(walk("2>=1"), "GTE(2, 1)");
  t.equal(walk("2  < 2"), "LT(2, 2)");
  t.equal(walk("2 <=   2"), "LTE(2, 2)");
  t.equal(walk("2+   2"), "ADD(2, 2)");
  t.equal(walk("2   -2"), "SUBTRACT(2, 2)");
  t.equal(walk("2     *2"), "MULTIPLY(2, 2)");
  t.equal(walk("2/2"), "DIVIDE(2, 2)");
  t.equal(walk("2^2"), "POWER(2, 2)");
  t.equal(walk('"a" & "b"'), 'CONCATENATE("a", "b")');
  t.equal(walk("@foo1"), "@foo1");

  t.equal(walk("sum({2,2})"), "SUM([2,2])");
  t.equal(walk("sum({2;2})"), "SUM([[2],[2]])");
  t.equal(walk("{1;2;3;4;5;6}"), "[[1],[2],[3],[4],[5],[6]]");
  t.equal(walk("{1,2,3;4,5,6}"), "[[1,2,3],[4,5,6]]");

  t.equal(
    walk(walk(walk("and(or(status=1),false,true)"))), // should produce same output each call
    "AND(OR(EQ(status, 1)), false, true)"
  );
});
