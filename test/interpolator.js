import test from "tape";
import interpolator from "../src/interpolator";

test("interpolator", t => {
  t.plan(2);
  t.equal(interpolator(0, 100)(0.4), 40);
  t.equal(
    interpolator(new Date(2015, 11, 1), new Date(2015, 11, 31))(0.5).toString(),
    "Wed Dec 16 2015 00:00:00 GMT-0800 (Pacific Standard Time)"
  );
});
