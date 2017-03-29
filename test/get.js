import test from 'tape'
import error from '../fn/error'
import get from '../fn/get'

test('get', (t) => {
  t.plan(1)
  t.deepEqual( get('name', { name: 'Peter'}), 'Peter')
})
