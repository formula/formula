import test from "tape";
import { d1900 } from "../src/constants";
import parsedate from "../src/parsedate";
import { ERRORTYPES as error } from "../src/error";

test("parsedate", function(t) {
  t.plan(5);
  t.deepEqual(parsedate(d1900), d1900);
  t.deepEqual(parsedate("1/1/2000"), new Date("1/1/2000"));
  t.deepEqual(parsedate(36526), new Date("1/1/2000"));
  t.is(parsedate("foo"), error.value);
  t.is(parsedate(error.value), error.value);
});
