import test from 'tape'
import error from '../src/ERROR'
import {PI} from '../src/PI'

test('PI', (t) => {
  t.plan(1)
  t.equal( PI(), 6.28318530717958 / 2)
})
