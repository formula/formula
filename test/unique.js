import unique from "../src/unique";
import test from "tape";
import { ERRORTYPES as error } from "../src/error";

test("unique", function(t) {
  t.plan(1);
  t.assert(unique([1, 1, 1, 2, 3]), [1, 2, 3]);
});
