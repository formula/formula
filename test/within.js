import test from "tape";
import within from "../src/within";

test("within", function(t) {
  t.plan(5);
  t.equal(within(5, 2, 4), false);
  t.equal(within(4, 2, 4), true);
  t.equal(within(3, 2, 4), true);
  t.equal(within(2, 2, 4), true);
  t.equal(within(1, 2, 4), false);
});
