var test = require("tape");
import compile from "../src/compile";

test("compiler should pass basic tests", function(t) {
  t.plan(17);

  t.equal(compile("2=2").code, "Formula.EQ(2, 2)");
  t.equal(compile("-2").code, "Formula.MINUS(2)");
  t.equal(compile("+2").code, "Formula.PLUS(2)");
  t.equal(compile("2 = 2").code, "Formula.EQ(2, 2)");
  t.equal(compile("2<>2").code, "Formula.NE(2, 2)");
  t.equal(compile("2 > 2").code, "Formula.GT(2, 2)");
  t.equal(compile("2>=2").code, "Formula.GTE(2, 2)");
  t.equal(compile("2  < 2").code, "Formula.LT(2, 2)");
  t.equal(compile("2 <=   2").code, "Formula.LTE(2, 2)");
  t.equal(compile("2+   2").code, "Formula.ADD(2, 2)");
  t.equal(compile("2   -2").code, "Formula.SUBTRACT(2, 2)");
  t.equal(compile("2     *2").code, "Formula.MULTIPLY(2, 2)");
  t.equal(compile("2/2").code, "Formula.DIVIDE(2, 2)");
  t.equal(compile("2^2").code, "Formula.POWER(2, 2)");
  t.equal(compile('"a" & "b"').code, `Formula.CONCATENATE("a", "b")`);
  t.equal(compile("@foo1").code, 'context.get("@foo1")');
  t.equal(compile(`"""Hello, World""!"`), '"Hello, World"!')

});

test("compiler complex nesting should work", function(t) {
  t.plan(1);

  t.equal(
    compile("2+2=((2-2+2)+(3-1))").code,
    "Formula.EQ(Formula.ADD(2, 2), (Formula.ADD((Formula.ADD(Formula.SUBTRACT(2, 2), 2)), (Formula.SUBTRACT(3, 1)))))"
  );
});

test("compiler should eat array for breakfast", function(t) {
  t.plan(2);

  t.equal(compile("{2,2}").code, "[2,2]");
  t.equal(compile("{2;2}").code, "[[2],[2]]");
});
