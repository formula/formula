import index from "../src/index";
import test from "tape";
import { ERRORTYPES as error } from "../src/error";

test("index", function(t) {
  t.plan(5);
  var array = [[1, 2], [3, 4], [5, 6]];
  t.equal(index(array, 1), 1, "Should be 1");
  t.equal(index(array, 1, 2), 2, "Should be 2");
  t.equal(index(array, 3, 2), 6, "Should be 6");
  t.equal(index(array, 4), error.ref, "Should be out of range");
  t.equal(index(array, 1, 3), error.ref, "Should be out of range");
});
