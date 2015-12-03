import {SIN} from '../src/SIN'
import error from '../src/ERROR'
import test from 'tape'

test('SIN', function(t) {
  t.plan(3)
  t.equal( SIN(0), 0 )
  t.equal( SIN(NaN), error.value )
  t.equal( SIN('invalid'), error.value )
})
