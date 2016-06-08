import {sin} from '../src/sin'
import error from '../src/error'
import test from 'tape'

test('SIN', function(t) {
  t.plan(3)
  t.equal( sin(0), 0 )
  t.equal( sin(NaN), error.value )
  t.equal( sin('invalid'), error.value )
})
