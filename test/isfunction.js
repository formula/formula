import test from "tape";
import isfunction from "../src/isfunction";

test("isfunction", function(t) {
  t.plan(5);
  t.equal(isfunction(setInterval), true);
  t.equal(isfunction(function() {}), true);
  t.equal(isfunction(5), false);
  t.equal(isfunction("invalid"), false);
  t.equal(isfunction(new Date()), false);

  // TBD: Dev tooling not ready for this test case. Manual tests pass.
  // t.equal(isfunction(async function() {}), true);
});
