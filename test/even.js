import test from 'tape'
import { ERRORTYPES as error } from '../src/error'
import even from '../src/even'

test('even', (t) => {
  t.plan( 2 )
  t.equal( even( 1.7 ), 2)
  t.equal( even( 2.7 ), 4)
})
