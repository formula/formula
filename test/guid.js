import test from 'tape'
import error from '../fn/error'
import guid from '../fn/guid'

test('guid', (t) => {
  t.plan(1)
  t.equal( guid().length, 36)
})
