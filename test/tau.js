import { ERRORTYPES as error } from "../src/error";
import test from "tape";
import tau from "../src/tau";

test("tau", function(t) {
  t.plan(1);
  t.equal(tau(), 6.28318530717958, "Should be 2PI");
});
