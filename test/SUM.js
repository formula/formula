import {SUM} from '../src/SUM'
import error from '../src/ERROR'
import test from 'tape'

test('SUM', function(t) {
  t.plan(6)
  t.equal( SUM(2,2), 4 )
  t.equal( SUM(2,2.2), 4.2 )
  t.equal( SUM([2,2]), 4 )
  t.equal( SUM([[2], [2]]), 4 )
  t.equal( SUM([[2]], 2), 4 )
  t.equal( SUM([[2]], {}), error.value )
})
