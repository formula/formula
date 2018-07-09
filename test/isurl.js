import test from "tape";
import isurl from "../src/isurl";

test("isurl", function(t) {
  t.plan(8);
  t.equal(isurl("http://google.com"), true);
  t.equal(isurl("http://www.google.com"), true);
  t.equal(isurl("https://www.google.com?q=test"), true);
  t.equal(isurl("http://localhost:3000/foo?test=1"), true);
  t.equal(isurl("https://localhost:3000/foo?test=1"), true);
  t.equal(isurl("https:/localhost:3000/foo?test=1"), false);
  t.equal(isurl("www.google.com"), true);
  t.equal(isurl("www<google.com"), false);
});
