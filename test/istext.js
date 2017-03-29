import test from 'tape'
import error from '../fn/error'
import istext from '../fn/istext'

test('istext', (t) => {
  t.plan(4)
  t.equal( istext( '' ), true)
  t.equal( istext( 1 ), false)
  t.equal( istext( new Date() ), false)
  t.equal( istext( error.value ), false)
})
