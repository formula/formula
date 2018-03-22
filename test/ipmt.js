import test from "tape";
import ipmt from "../fn/ipmt";
import error from "../fn/error";

test("ipmt", function(t) {
  t.plan(2);
  t.equal(typeof ipmt, "function");
  t.equal(ipmt(0.1, 3, 3, 8000), -292.4471299093658);
});
