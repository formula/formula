import test from "tape";
import nper from "../src/nper";

test("nper", t => {
  t.plan(1);
  t.equal(nper(0.12 / 12, -100, -1000, 10000, true), 59.67386567429457);
});
