import test from 'tape'
import {ADD} from '../src/ADD'
import error from '../src/ERROR'

test('AND', (t) => {
  t.plan(5)
  t.equal( ADD(2), error.na)
  t.equal( ADD(2, 2, 2), error.na)
  t.equal( ADD('foo', 2), error.value)
  t.equal( ADD(2, 'foo'), error.value)
  t.equal( ADD(2, 2), 4)
});
