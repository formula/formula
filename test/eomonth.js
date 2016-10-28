import test from 'tape'
import error from '../src/error'
import parsedate from '../src/parsedate'
import eomonth from '../src/eomonth'

test('eomonth', (t) => {
  t.plan(2)
  t.deepEqual( eomonth( '1/11/2011', 0), parsedate('1/31/2011'))
  t.deepEqual( eomonth( '1/11/2011', 1), parsedate('2/28/2011'))
})
