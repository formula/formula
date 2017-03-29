import sin from '../fn/sin'
import error from '../fn/error'
import test from 'tape'

test('sin', function(t) {
  t.plan(3)
  t.equal( sin(0), 0 )
  t.equal( sin(NaN), error.value )
  t.equal( sin('invalid'), error.value )
})
