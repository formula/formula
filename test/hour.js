import test from 'tape'
import { ERRORTYPES as error } from '../src/error'
import hour from '../src/hour'

test('hour', (t) => {
  t.plan(3)
  t.equal( hour(0.2222), 5)
  t.equal( hour(0.5555), 13)
  t.equal( hour(0.8181), 19)
})
