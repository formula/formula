import test from "tape";
import dec2bin from "../src/dec2bin";
import { ERRORTYPES as error } from "../src/error";

test("dec2bin", function(t) {
  t.plan(7);
  t.equal(dec2bin(9), "1001");
  t.equal(dec2bin(9, 4), "1001");
  t.equal(dec2bin(-100), "1110011100");
  t.equal(dec2bin(512), error.num);
  t.equal(dec2bin("a"), error.value);
  t.equal(dec2bin(1, "a"), error.value);
  t.equal(dec2bin(1, -1), error.num);
});
