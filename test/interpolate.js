import test from "tape";
import interpolate from "../src/interpolate";

test("interpolate", t => {
  t.plan(2);
  t.equal(interpolate(0, 100, 0.4), 40);
  t.equal(
    interpolate(new Date(2015, 11, 1), new Date(2015, 11, 31), 0.5).toISOString(),
    "2015-12-16T08:00:00.000Z"
  );
});
