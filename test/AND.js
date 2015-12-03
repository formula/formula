import test from 'tape'
import {AND} from '../src/AND'

test('AND', (t) => {
  t.plan(5)
  t.equal( AND(true, true), true)
  t.equal( AND(true, false), false)
  t.equal( AND(false, true), false)
  t.equal( AND(true, true, true), true)
  t.equal( AND(true, false, true), false)
});
