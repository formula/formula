import test from 'tape'
import error from '../src/ERROR'
import {ISTEXT} from '../src/ISTEXT'

test('ISTEXT', (t) => {
  t.plan(4)
  t.equal( ISTEXT( '' ), true)
  t.equal( ISTEXT( 1 ), false)
  t.equal( ISTEXT( new Date() ), false)
  t.equal( ISTEXT( error.value ), false)
})
