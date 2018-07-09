import search from "../src/search";
import { ERRORTYPES as error } from "../src/error";
import test from "tape";

test("search", function(t) {
  t.plan(4);
  t.equal(search("a", "fooabar"), 4);
  t.equal(search("bar", "fooabar"), 5);
  t.equal(search("z", "fooabar"), error.value);
  t.equal(search("foo", "fooabar"), 1);
});
