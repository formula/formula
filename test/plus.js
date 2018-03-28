import test from "tape";
import plus from "../src/plus";
import { ERRORTYPES as error } from "../src/error";

test("plus", t => {
  t.plan(2);
  t.equal(plus("foo"), error.value);
  t.equal(plus("2"), 2);
});
