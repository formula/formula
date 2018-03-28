import test from 'tape'
import isarray from '../src/isarray'

test( 'isarray', (t) => {
  t.plan(3)
  t.equal( isarray( [] ), true )
  t.equal( isarray( {} ), false )
  t.equal( isarray( 'string' ), false )
})
