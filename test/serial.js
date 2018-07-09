import serial from "../src/serial";
import test from "tape";
import { ERRORTYPES as error } from "../src/error";

test("serial", function(t) {
  t.plan(7);
  t.equal(serial(new Date(2016, 6, 28)), 42579, "Should be 42579");
  t.equal(serial(new Date(2008, 6, 8)), 39637, "Should be 39637");
  t.equal(serial(new Date(1900, 0, 1)), 1, "Should be 1");
  t.equal(serial(new Date(1900, 1, 1)), 32, "Should be 33");
  t.equal(serial(new Date(1900, 2, 1)), 60, "Should be 61");
  t.equal(serial(new Date(2000, 0, 1)), 36526, "Should be 36526");
  t.equal(serial("foo"), error.na, "Should be NA");
});
