import test from 'tape'
import error from '../src/ERROR'
import {ISNA} from '../src/ISNA'

test('ISNA', (t) => {
  t.plan(4)
  t.equal( ISNA( error.na ), true)
  t.equal( ISNA( error.value ), false)
  t.equal( ISNA( 'error.na' ), false)
  t.equal( ISNA( new Date() ), false)
})
