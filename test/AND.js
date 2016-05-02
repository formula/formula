import test from 'tape'
import error from '../src/ERROR'
import {AND} from '../src/AND'

test('AND', (t) => {
  t.plan(10)
  t.equal( AND(true, true), true)
  t.equal( AND(true, false), false)
  t.equal( AND(false, true), false)
  t.equal( AND(true, true, true), true)
  t.equal( AND(true, false, true), false)
  t.equal( AND(1, 1, 0), false)
  t.equal( AND(1, 1, 1), true)
  t.equal( AND(1, 1, 1, 1, 1, 1, 1), true)
  t.equal( AND(1, "foo", 0), error.value)
  t.equal( AND(1, NaN, 0), error.value)
});
