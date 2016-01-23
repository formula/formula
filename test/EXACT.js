import test from 'tape'
import {EXACT} from '../src/EXACT'

test('EXACT', (t) => {
  t.plan(2)
  t.equal( EXACT( 'FOO', 'Foo'), false)
  t.equal( EXACT( 'FOO', 'FOO'), true)
})
