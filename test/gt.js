import test from "tape";
import gt from "../src/gt";

test("gt", function(t) {
  t.plan(4);
  t.equal(gt(2, 4), false);
  t.equal(gt(200, 800), false);
  t.equal(gt(20000000, 40000000), false);
  t.deepEqual(gt([0, 1, 2, 3, 4, 5, 6, 7], 5), [
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true
  ]);
});
