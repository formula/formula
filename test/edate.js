import test from 'tape'
import error from '../src/error'
import {edate} from '../src/edate'

test('edate', (t) => {
  t.plan(3)
  t.equal( edate( "1/1/2000", 2 ), 36586)
  t.equal( edate( "1/1/2000", -2 ), 36465)
  t.equal( edate( 36526, 2 ), 36586)
})
