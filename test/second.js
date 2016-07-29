import test from 'tape'
import error from '../src/error'
import {second} from '../src/second'

test('second', (t) => {
  t.plan(3)
  t.equal( second(0.2222), 58)
  t.equal( second(0.5555), 55)
  t.equal( second(0.8181), 4)
})
