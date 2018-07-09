import test from "tape";
import notincludes from "../src/notincludes";
import { ERRORTYPES as error } from "../src/error";

test("notincludes", function(t) {
  t.plan(6);
  t.equal(notincludes("aa", ["aa", "bb", "cc"]), !true);
  t.equal(notincludes("bb", ["aa", "bb", "cc"]), !true);
  t.equal(notincludes("cc", ["aa", "bb", "cc"]), !true);
  t.equal(notincludes("a", ["aa", "bb", "cc"]), !false);
  t.equal(notincludes("b", ["aa", "bb", "cc"]), !false);
  t.equal(notincludes("c", ["aa", "bb", "cc"]), !false);
});
