import test from "tape";
import substitute from "../src/substitute";

test("substitute", function(t) {
  t.plan(4);
  t.equal(substitute("Hello, <name>", "<name>", "Bob"), "Hello, Bob");
  t.equal(
    substitute("Hello, <name> <name>", "<name>", "Bob"),
    "Hello, Bob Bob"
  );
  t.equal(
    substitute("Hello, <name> <name>", "<name>", "Bob", 2),
    "Hello, <name> Bob"
  );

  t.equal(
    substitute("Hello, <name> <name> <name>", "<name>", "Bob", 2),
    "Hello, <name> Bob <name>"
  );
});
