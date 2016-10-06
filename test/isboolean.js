import test from 'tape'
import isboolean from '../fn/isboolean'

test('isboolean', (t) => {
  t.plan(3)
  t.equal( isboolean( true ), true)
  t.equal( isboolean( false ), true)
  t.equal( isboolean( 'false' ), false)
})
