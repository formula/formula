import test from "tape";
import exact from "../src/exact";

test("exact", t => {
  t.plan(2);
  t.equal(exact("FOO", "Foo"), false);
  t.equal(exact("FOO", "FOO"), true);
});
