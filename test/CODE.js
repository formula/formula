import test from 'tape'
import {CODE} from '../src/CODE'

test('CODE', (t) => {
  t.plan(2)
  t.equal( CODE( 'A'), 65)
  t.equal( CODE( 'a'), 97)
})
