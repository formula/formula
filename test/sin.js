import sin from "../src/sin";
import { ERRORTYPES as error } from "../src/error";
import test from "tape";

test("sin", function(t) {
  t.plan(3);
  t.equal(sin(0), 0);
  t.equal(sin(NaN), error.value);
  t.equal(sin("invalid"), error.value);
});
