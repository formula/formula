import test from 'tape'
import error from '../src/ERROR'
import {DIVIDE} from '../src/DIVIDE'

test('DIVIDE', (t) => {
  t.plan(4)
  t.equal( DIVIDE( 10, 1 ), 10)
  t.equal( DIVIDE( 10, 2 ), 5)
  t.equal( DIVIDE( 10, 5 ), 2)
  t.equal( DIVIDE( 10, 0 ), error.div0)
})
