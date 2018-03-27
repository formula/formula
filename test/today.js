import test from 'tape'
import { ERRORTYPES as error } from '../src/error'
import today from '../src/today'

test('today', (t) => {
  t.plan(1)
  t.equal( typeof today(), 'number')
})
