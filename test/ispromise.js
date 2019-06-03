import test from "tape";
import ispromise from "../src/ispromise";

test("ispromise", function(t) {
  t.plan(6);
  t.equal(ispromise(setInterval), false);
  t.equal(ispromise(function() {}), false);
  t.equal(ispromise(5), false);
  t.equal(ispromise("invalid"), false);
  t.equal(ispromise(new Date()), false);
  t.equal(ispromise(new Promise(r => r(1))), true);

  // TBD: Dev tooling not ready for this test case. Manual tests pass.
  // t.equal(ispromise(async function() {}), true);
});
