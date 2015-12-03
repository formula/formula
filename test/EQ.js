import test from 'tape'
import {EQ} from '../src/EQ'

test('EQ', (t) => {
  t.plan(3)
  t.equal( EQ( 1, 1), true)
  t.equal( EQ( 2, 4), false)
  t.equal( EQ( 'FOO', 'fOo'), true)
})
