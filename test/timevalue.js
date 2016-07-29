import test from 'tape'
import error from '../src/error'
import {timevalue} from '../src/timevalue'

test('timevalue', (t) => {
  t.plan(3)
  t.equal( timevalue("12:00"), 0.5)
  t.equal( timevalue("12:00 am"), 0.0)
  t.equal( timevalue("12:00 pm"), 0.5)
})
