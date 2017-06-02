import test from 'tape'
import error from '../fn/error'
import and from '../fn/and'

test('and', (t) => {
  t.plan(14)

  // literal values
  t.equal( and(true, true), true)
  t.equal( and(true, false), false)
  t.equal( and(false, true), false)
  t.equal( and(true, true, true), true)
  t.equal( and(true, false, true), false)
  t.equal( and(1, 1, 0), false)
  t.equal( and(1, 1, 1), true)
  t.equal( and(1, 1, 1, 1, 1, 1, 1), true)
  t.equal( and(1, "foo", 0), error.value)
  t.equal( and(1, NaN, 0), error.value)
  t.equal( and(0, 1, 1), false)
  t.equal( and(false, 1, 1), false)

  // deferred values
  t.equal( and(() => true, () => true), true)
  t.equal( and(() => true, () => false), false)

});
