import test from "tape";
import { ERRORTYPES as error } from "../src/error";
import islowercase from "../src/islowercase";

test("islowercase", t => {
  t.plan(8);
  t.equal(islowercase("a"), true);
  t.equal(islowercase("b"), true);
  t.equal(islowercase("zzz"), true);
  t.equal(islowercase("1"), false);
  t.equal(islowercase("A"), false);
  t.equal(islowercase("AZ"), false);
  t.equal(islowercase("a1z"), false);
  t.equal(islowercase("A1z"), false);
});
