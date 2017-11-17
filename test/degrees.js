import test from 'tape'
import error from '../src/error'
import { pi } from '../src/constants'
import degrees from '../src/degrees'
import round from '../src/round'

test('degrees', (t) => {
  t.plan(1)
  t.equal( round( degrees( pi ), 0), 180)
})
