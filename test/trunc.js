import test from "tape";
import trunc from "../src/trunc";

test("trunc", function(t) {
  t.plan(6);

  t.is(trunc(1.2), 1);
  t.is(trunc(1.3), 1);
  t.is(trunc(1.5), 1);
  t.is(trunc(1.7), 1);
  t.is(trunc(1.9), 1);
  t.is(trunc(-1.9), -1);
});
