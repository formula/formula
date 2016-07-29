import test from 'tape'
import error from '../src/error'
import {time} from '../src/time'

test('time', (t) => {
  t.plan(3)
  t.equal( time(5, 19, 58), 0.222199074074074)
  t.equal( time(13, 19, 55), 0.555497685185185)
  t.equal( time(19, 38, 4), 0.818101851851852)
})
