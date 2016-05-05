import test from 'tape'
import error from '../src/ERROR'
import {POWER} from '../src/POWER'

test('POWER', (t) => {
  t.plan(4)
  t.equal( POWER( 2, 8 ), 256)
  t.equal( POWER( 2, "foo" ), error.value)
  t.equal( POWER( "foo", 2 ), error.value)
  t.equal( POWER( 1,2,3 ), error.na)
})
