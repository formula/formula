import test from 'tape'
import error from '../fn/error'
import now from '../fn/now'

test('now', (t) => {
  t.plan(1)
  t.equal( typeof now(), 'number')
})
