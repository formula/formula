import test from 'tape'
import error from '../src/error'
import {minute} from '../src/minute'

test('minute', (t) => {
  t.plan(3)
  t.equal( minute(0.2222), 19)
  t.equal( minute(0.5555), 19)
  t.equal( minute(0.8181), 38)
})
