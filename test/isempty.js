import isempty from "../src/isempty";
import test from "tape";

test("isempty", function(t) {
  t.plan(6);
  t.equal(isempty(undefined), true);
  t.equal(isempty(null), true);
  t.equal(isempty(""), true);
  t.equal(isempty([]), true);
  t.equal(isempty(new Date()), false);
  t.equal(isempty(1), false);
});
