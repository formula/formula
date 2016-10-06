import test from 'tape'
import error from '../fn/error'
import today from '../fn/today'

test('today', (t) => {
  t.plan(1)
  t.equal( typeof today(), 'number')
})
