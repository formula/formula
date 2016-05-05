import test from 'tape'
import error from '../src/ERROR'
import {ISEVEN} from '../src/ISEVEN'

test('ISEVEN', (t) => {
  t.plan(5)
  t.equal( ISEVEN( 2 ), true)
  t.equal( ISEVEN( 3 ), false)
  t.equal( ISEVEN( 4 ), true)
  t.equal( ISEVEN( 100000000004 ), true)
  t.equal( ISEVEN( 100000000005 ), false)
})
