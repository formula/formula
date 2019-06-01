import test from "tape";
import hash from "../src/hash";

test("hash", t => {
  t.plan(2);
  t.equal(hash("Mary had a little lamb."), 1766333550);
  t.equal(hash("Hello, world!"), 343662184);
});
