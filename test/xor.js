import test from 'tape'
import error from '../src/error'
import {xor} from '../src/xor'

test('XOR', (t) => {
  t.plan(3)
  t.equal( xor( true, false, false ), true)
  t.equal( xor( true, false, true ), false)
  t.equal( xor( false, false, false ), false)
})
