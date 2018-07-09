import test from "tape";
import days360 from "../src/days360";
import { ERRORTYPES as error } from "../src/error";

test("days360", function(t) {
  t.plan(12);
  t.equal(days360("1/1/1901", "1/2/1901", true), 1);
  t.equal(days360("1/1/1901", "12/31/1901", true), 359);
  t.equal(days360("1/1/1901", "1/1/1902", true), 360);
  t.equal(days360("1/1/1901", "2/1/1901", true), 30);
  t.equal(days360("1/1/1901", "1/2/1901", false), 1);
  t.equal(days360("1/1/1901", "12/31/1901", false), 360);
  t.equal(days360("1/1/1901", "1/1/1902", false), 360);
  t.equal(days360("1/1/1901", "2/1/1901", false), 30);
  t.equal(days360("1/30/1901", "12/31/1901", false), 330);
  t.equal(days360("1/1/1901", "a"), error.value);
  t.equal(days360("a", "1/2/1901"), error.value);
  t.equal(days360("1/1/1901", "1/2/1901", "a"), error.value);
});
