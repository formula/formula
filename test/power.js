import test from 'tape'
import error from '../fn/error'
import power from '../fn/power'

test('power', (t) => {
  t.plan(4)
  t.equal( power( 2, 8 ), 256)
  t.equal( power( 2, "foo" ), error.value)
  t.equal( power( "foo", 2 ), error.value)
  t.equal( power( 1,2,3 ), error.na)
})
