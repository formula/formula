import test from "tape";
import year from "../src/year";
import { ERRORTYPES as error } from "../src/error";

test("year", t => {
  t.plan(3);
  t.equal(year("1/1/2000"), 2000);
  t.equal(year("5/15/2005"), 2005);
  t.equal(year("12/31/2012"), 2012);
});
