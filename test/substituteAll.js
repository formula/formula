import test from 'tape';
import {substituteAll} from '../src/substituteAll';

test('substituteAll', function(t) {
  t.plan(1);
  t.equal(
    substituteAll("Hello, -first- %last%. Is your first name really -first-?", { "-first-": "Tom", '%last%': "Jones" }),
    "Hello, Tom Jones. Is your first name really Tom?"
  )
})
