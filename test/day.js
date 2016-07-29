import test from 'tape'
import {day} from '../src/day'
import error from '../src/error'

test('day', (t) => {
  t.plan(3)
  t.equal( day('1/1/2000'), 1)
  t.equal( day('1/15/2000'), 15)
  t.equal( day('1/31/2000'), 31)
});
