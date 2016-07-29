import test from 'tape'
import error from '../src/error'
import {yearfrac} from '../src/yearfrac'

test('yearfrac', (t) => {
  t.plan(3)
  t.equal( yearfrac('1/1/2012', '7/30/2012'), 0.5805555555555556)
  t.equal( yearfrac('1/1/2012', '7/30/2012', 1), 0.5765027322404371)
  t.equal( yearfrac('1/1/2012', '7/30/2012', 3), 0.5780821917808219)

})
