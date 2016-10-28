import test from 'tape'
import error from '../src/error'
import isodd from '../src/isodd'

test('isodd', (t) => {
  t.plan(5)
  t.equal( isodd( 2 ), false)
  t.equal( isodd( 3 ), true)
  t.equal( isodd( 4 ), false)
  t.equal( isodd( 100000000004 ), false)
  t.equal( isodd( 100000000005 ), true)
})
