import test from 'tape'
import error from '../fn/error'
import second from '../fn/second'

test('second', (t) => {
  t.plan(3)
  t.equal( second(0.2222), 58)
  t.equal( second(0.5555), 55)
  t.equal( second(0.8181), 4)
})
