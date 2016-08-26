import test from 'tape'
import {isboolean} from '../src/isboolean'

test('isboolean', (t) => {
  t.plan(3)
  t.equal( isboolean( true ), true)
  t.equal( isboolean( false ), true)
  t.equal( isboolean( 'false' ), false)
})
