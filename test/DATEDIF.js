import test from 'tape'
import error from '../src/ERROR'
import {DATEDIF} from '../src/DATEDIF'
import {PARSEDATE} from '../src/PARSEDATE'

test('DATEDIF', (t) => {
  t.plan(4)

  // Accept serial dates
  t.equal( DATEDIF(36526, 36527, "D"), 1)
  t.equal( DATEDIF( "1/1/2000", "1/2/2000", "D" ), 1)
  t.equal( DATEDIF( "1/1/2000", "1/2/2001", "Y" ), 1)
  t.equal( DATEDIF("1/1/2000", "2/1/2000", "M"), 1)

  // TODO: Need more tests!

})
