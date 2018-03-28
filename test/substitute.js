import test from 'tape';
import substitute from '../src/substitute';

test('substitute', function(t) {
  t.plan(3);
  t.equal(
    substitute("Hello, <name>", "<name>", "Bob"),
    "Hello, Bob"
  )
  t.equal(
    substitute("Hello, <name> <name>", "<name>", "Bob"),
    "Hello, Bob Bob"
  )
  t.equal(
    substitute("Hello, <name> <name>", "<name>", "Bob", 2),
    "Hello, <name> Bob"
  )
})
