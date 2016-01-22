import test from 'tape';
import {SUBSTITUTE} from '../src/SUBSTITUTE';

test('SUBSTITUTE', function(t) {
  t.plan(3);
  t.equal(
    SUBSTITUTE("Hello, <name>", "<name>", "Bob"),
    "Hello, Bob"
  )
  t.equal(
    SUBSTITUTE("Hello, <name> <name>", "<name>", "Bob"),
    "Hello, Bob Bob"
  )
  t.equal(
    SUBSTITUTE("Hello, <name> <name>", "<name>", "Bob", 2),
    "Hello, <name> Bob"
  )
})
