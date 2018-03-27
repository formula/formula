import test from 'tape'
import { ERRORTYPES as error } from '../src/error'
import pi from '../src/pi'

test('pi', (t) => {
  t.plan(1)
  t.equal( pi(), 6.28318530717958 / 2)
})
