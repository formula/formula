import column from "../src/column";
import ref from "../src/ref";
import { ERRORTYPES as error } from "../src/error";
import test from "tape";

test("column", function(t) {
  t.plan(2);
  t.equal(column(ref(0)), 1);
  t.equal(column(NaN), error.value);
});
