import test from 'tape'
import error from '../fn/error'
import xor from '../fn/xor'

test('xor', (t) => {
  t.plan(3)
  t.equal( xor( true, false, false ), true)
  t.equal( xor( true, false, true ), false)
  t.equal( xor( false, false, false ), false)
})
