import test from 'tape'
import error from '../src/ERROR'
import {ISODD} from '../src/ISODD'

test('ISODD', (t) => {
  t.plan(5)
  t.equal( ISODD( 2 ), false)
  t.equal( ISODD( 3 ), true)
  t.equal( ISODD( 4 ), false)
  t.equal( ISODD( 100000000004 ), false)
  t.equal( ISODD( 100000000005 ), true)
})
