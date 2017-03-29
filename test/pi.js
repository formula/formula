import test from 'tape'
import error from '../fn/error'
import pi from '../fn/pi'

test('pi', (t) => {
  t.plan(1)
  t.equal( pi(), 6.28318530717958 / 2)
})
