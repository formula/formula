import test from 'tape'
import error from '../src/ERROR'
import {XOR} from '../src/XOR'

test('XOR', (t) => {
  t.plan(3)
  t.equal( XOR( true, false, false ), true)
  t.equal( XOR( true, false, true ), false)
  t.equal( XOR( false, false, false ), false)
})
