import { ERRORTYPES as error } from "../src/error";
import test from "tape";
import s from "../src/switch";

test("switch    ", function(t) {
  t.plan(5);
  t.equal(s(1), error.na);
  t.equal(s(1, 1, "fooa"), "fooa");
  t.equal(s(3, 1, "fooa", 2, "foob", 3, "fooc"), "fooc");
  t.equal(s(2, 1, "fooa"), error.na);
  t.equal(s(255, 1, "fooa", "default"), "default");
});
