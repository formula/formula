import test from 'tape'
import { ERRORTYPES as error } from '../src/error'
import datedif from '../src/datedif'
import parsedate from '../src/parsedate'

test('datedif', (t) => {
  t.plan(4)

  // Accept serial dates
  t.equal( datedif(36526, 36527, "D"), 1)
  t.equal( datedif( "1/1/2000", "1/2/2000", "D" ), 1)
  t.equal( datedif( "1/1/2000", "1/2/2001", "Y" ), 1)
  t.equal( datedif("1/1/2000", "2/1/2000", "M"), 1)

  // TODO: Need more tests!

})
