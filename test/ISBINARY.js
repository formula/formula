import test from 'tape'
import error from '../src/ERROR'
import {ISBINARY} from '../src/ISBINARY'

test('ISBINARY', (t) => {
  t.plan(5)
  t.equal( ISBINARY( '0000000' ), true)
  t.equal( ISBINARY( '0101010101' ), true)
  t.equal( ISBINARY( '01010101011' ), false, 'Must be less than 10 characters')
  t.equal( ISBINARY( '0200000' ), false)
  t.equal( ISBINARY( 'foo' ), false)
})
