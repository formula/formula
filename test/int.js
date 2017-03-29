import test from 'tape'
import int from '../fn/int'

test( 'int', (t) => {
  t.plan(3)
  t.equal( int( 1.2 ), 1 )
  t.equal( int( 1.9 ), 1 )
  t.equal( int( -1.9 ), -2 )
})
