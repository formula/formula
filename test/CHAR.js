import test from 'tape'
import {CHAR} from '../src/CHAR'

test('CHAR', (t) => {
  t.plan(2)
  t.equal( CHAR( 65 ), 'A')
  t.equal( CHAR( 97 ), 'a')
})
