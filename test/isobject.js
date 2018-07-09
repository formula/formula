import test from "tape";
import isobject from "../src/isobject";

test("isobject", t => {
  t.plan(3);
  t.equal(isobject({}), true);
  t.equal(isobject(""), false);
  t.equal(isobject(2), false);
});
