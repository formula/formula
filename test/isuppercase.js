import test from "tape";
import { ERRORTYPES as error } from "../src/error";
import isuppercase from "../src/isuppercase";

test("isuppercase", t => {
  t.plan(8);
  t.equal(isuppercase("A"), true);
  t.equal(isuppercase("B"), true);
  t.equal(isuppercase("ZZZ"), true);
  t.equal(isuppercase("1"), false);
  t.equal(isuppercase("a"), false);
  t.equal(isuppercase("az"), false);
  t.equal(isuppercase("A1Z"), false);
  t.equal(isuppercase("a1Z"), false);
});
