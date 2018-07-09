import numbers from "../src/numbers";
import test from "tape";

test("numbers", function(t) {
  t.plan(1);
  t.deepEqual(numbers(1, "1", "foo", 2), [1, 2]);
});
