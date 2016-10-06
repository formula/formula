import test from 'tape'
import error from '../fn/error'
import isoweeknum from '../fn/isoweeknum'

test('isoweeknum', (t) => {
  t.plan(1)
  t.equal( isoweeknum( "3/9/2012"), 10)
})
