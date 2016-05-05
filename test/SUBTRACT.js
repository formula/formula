import test from 'tape'
import error from '../src/ERROR'
import {SUBTRACT} from '../src/SUBTRACT'

test('SUBTRACT', (t) => {
  t.plan(5)
  t.equal( SUBTRACT(2), error.na)
  t.equal( SUBTRACT(2, 2, 2), error.na)
  t.equal( SUBTRACT('foo', 2), error.value)
  t.equal( SUBTRACT(2, 'foo'), error.value)
  t.equal( SUBTRACT(2, 2), 0)
})
