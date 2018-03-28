import test from 'tape'
import { ERRORTYPES as error } from '../src/error'
import floor from '../src/floor'

test('floor', (t) => {
  t.plan(5)
  t.equal( floor( 3.7, 2 ), 2 )
  t.equal( floor( -2.5, 2 ), -2 )
  t.equal( floor( 2.5, -2 ), error.num )
  t.equal( floor( 1.58, 0.1 ), 1.5 )
  t.equal( floor( 0.234, 0.01 ), 0.23 )
})
