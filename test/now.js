import test from "tape";
import { ERRORTYPES as error } from "../src/error";
import now from "../src/now";

test("now", t => {
  t.plan(1);
  t.equal(typeof now(), "number");
});
