import test from 'tape'
import isarray from '../fn/isarray'

test( 'isarray', (t) => {
  t.plan(3)
  t.equal( isarray( [] ), true )
  t.equal( isarray( {} ), false )
  t.equal( isarray( 'string' ), false )
})
