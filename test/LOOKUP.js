import test from 'tape'
import error from '../src/ERROR'
import {LOOKUP} from '../src/LOOKUP'

test('LOOKUP', (t) => {
  t.plan(2)
  // TODO: Need more tests
  t.equal( LOOKUP( 1, [1,2], ['Good', 'Bad'] ), 'Good')
  t.equal( LOOKUP( 2, [1,2], ['bad', 'good'] ), 'good')
})
