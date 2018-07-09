import acoth from "../src/acoth";
import round from "../src/round";
import { ERRORTYPES as error } from "../src/error";
import test from "tape";

test("acoth", function(t) {
  t.plan(4);
  // TBD: off by not so much. does it matter?
  t.equal(round(acoth(6), 12), 0.168236118311);
  t.equal(round(acoth(2), 12), 0.549306144334);
  t.equal(acoth(NaN), error.value);
  t.equal(acoth("invalid"), error.value);
});
