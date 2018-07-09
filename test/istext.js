import test from "tape";
import { ERRORTYPES as error } from "../src/error";
import istext from "../src/istext";

test("istext", t => {
  t.plan(4);
  t.equal(istext(""), true);
  t.equal(istext(1), false);
  t.equal(istext(new Date()), false);
  t.equal(istext(error.value), false);
});
