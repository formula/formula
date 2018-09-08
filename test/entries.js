import test from "tape";
import entries from "../src/entries";

test("entries", t => {
  t.plan(2);
  t.deepEqual(entries({ foo: 1 }), [["foo", 1]]);
  t.deepEqual(entries({ foo: 1, bar: "foo" }), [["foo", 1], ["bar", "foo"]]);
});
