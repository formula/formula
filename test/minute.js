import test from 'tape'
import error from '../fn/error'
import minute from '../fn/minute'

test('minute', (t) => {
  t.plan(3)
  t.equal( minute(0.2222), 19)
  t.equal( minute(0.5555), 19)
  t.equal( minute(0.8181), 38)
})
