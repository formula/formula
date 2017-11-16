import test from 'tape'
import ceiling from '../src/ceiling'

test('ceiling', (t) => {
  t.plan(5)
  t.equal( ceiling( 2.5, 1 ), 3 )
  t.equal( ceiling( -2.5, -2 ), -2 )
  t.equal( ceiling( -2.5, 2 ), -2)
  t.equal( ceiling( 1.5, 0.1 ), 1.5)
  t.equal( ceiling( 0.234, 0.01 ), 0.24)
})
