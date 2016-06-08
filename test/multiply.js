import test from 'tape'
import error from '../src/error'
import {multiply} from '../src/multiply'

test('multiply', (t) => {
  t.plan(4)
  t.equal( multiply( 2, 2 ), 4)
  t.equal( multiply( 4, 3 ), 12)
  t.equal( multiply( 4, 3 ), 12)
  t.equal( multiply( 'FOO', 'bar' ), error.value)
})
