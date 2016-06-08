import test from 'tape'
import error from '../src/error'
import {iseven} from '../src/iseven'

test('ISEVEN', (t) => {
  t.plan(5)
  t.equal( iseven( 2 ), true)
  t.equal( iseven( 3 ), false)
  t.equal( iseven( 4 ), true)
  t.equal( iseven( 100000000004 ), true)
  t.equal( iseven( 100000000005 ), false)
})
