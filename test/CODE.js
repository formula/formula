import test from 'tape'
import {CODE} from '../src/CODE'
import error from '../src/ERROR'

test('CODE', (t) => {
  t.plan(5)
  t.equal( CODE( 'Aa'), 65)
  t.equal( CODE( 'Aa', 1), 65)
  t.equal( CODE( 'Aa', 2), 97)
  t.equal( CODE( 'Aa', -1), error.na)
  t.equal( CODE( 'Aa', 3), error.value)
})
