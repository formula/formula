import test from 'tape'
import error from '../src/ERROR'
import {MULTIPLY} from '../src/MULTIPLY'

test('MULTIPLY', (t) => {
  t.plan(4)
  t.equal( MULTIPLY( 2, 2 ), 4)
  t.equal( MULTIPLY( 4, 3 ), 12)
  t.equal( MULTIPLY( 4, 3 ), 12)
  t.equal( MULTIPLY( 'FOO', 'bar' ), error.value)
})
