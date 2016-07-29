import test from 'tape'
import error from '../src/error'
import {isoweeknum} from '../src/isoweeknum'

test('isoweeknum', (t) => {
  t.plan(1)
  t.equal( isoweeknum( "3/9/2012"), 10)
})
