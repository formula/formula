import test from "tape";
import mod from "../src/mod";
import { ERRORTYPES as error } from "../src/error";

test("mod", function(t) {
  t.plan(4);
  t.equal(mod(), error.value);
  t.equal(mod("a", 10), error.value);
  t.equal(mod(2, 2), 0);
  t.equal(mod(5, 4), 1);
});
