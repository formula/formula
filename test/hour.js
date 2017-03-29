import test from 'tape'
import error from '../fn/error'
import hour from '../fn/hour'

test('hour', (t) => {
  t.plan(3)
  t.equal( hour(0.2222), 5)
  t.equal( hour(0.5555), 13)
  t.equal( hour(0.8181), 19)
})
