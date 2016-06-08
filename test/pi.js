import test from 'tape'
import error from '../src/error'
import {pi} from '../src/pi'

test('PI', (t) => {
  t.plan(1)
  t.equal( pi(), 6.28318530717958 / 2)
})
