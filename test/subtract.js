import test from 'tape'
import error from '../src/error'
import subtract from '../src/subtract'

test('subtract', (t) => {
  t.plan(5)
  t.equal( subtract(2), error.na)
  t.equal( subtract(2, 2, 2), error.na)
  t.equal( subtract('foo', 2), error.value)
  t.equal( subtract(2, 'foo'), error.value)
  t.equal( subtract(2, 2), 0)
})
