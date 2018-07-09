import test from "tape";
import unflatten from "../src/unflatten";

test("unflatten", t => {
  t.plan(2);
  t.deepEqual(unflatten([1, 2, 3, 4]), [[1, 2], [3, 4]]);
  t.deepEqual(unflatten([1, 2, 3, 4, 5, 6], 3), [[1, 2, 3], [4, 5, 6]]);
});
