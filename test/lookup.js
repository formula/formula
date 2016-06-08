import test from 'tape'
import error from '../src/error'
import {lookup} from '../src/lookup'

test('LOOKUP', (t) => {
  t.plan(2)
  // TODO: Need more tests
  t.equal( lookup( 1, [1,2], ['Good', 'Bad'] ), 'Good')
  t.equal( lookup( 2, [1,2], ['bad', 'good'] ), 'good')
})
