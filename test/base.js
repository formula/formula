import test from "tape";
import base from "../src/base";

test("base", t => {
  t.plan(3);
  t.equal(base(7, 2), "111");
  t.equal(base(100, 16), "64");
  t.equal(base(15, 2, 10), "0000001111");
});
