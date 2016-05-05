import test from 'tape'
import error from '../src/ERROR'
import {ISDATE} from '../src/ISDATE'

test('ISDATE', (t) => {
  t.plan(4)
  t.equal( ISDATE( new Date() ), true)
  t.equal( ISDATE( new Date("1/1/2000") ), true)
  t.equal( ISDATE( "1/1/2000" ), false, "Doesn't convert string to date")
  t.equal( ISDATE( "1-1-2000" ), false)
})
