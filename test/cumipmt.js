import test from "tape";
import cumipmt from "../fn/cumipmt";
import error from "../fn/error";

test("pmt", function(t) {
  t.plan(2);
  t.equal(typeof cumipmt, "function");
  t.equal(cumipmt(0.09 / 12, 30 * 12, 125000, 13, 24, 0), -11135.232130750843);
});
