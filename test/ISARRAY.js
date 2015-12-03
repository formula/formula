import test from 'tape'
import {ISARRAY} from '../src/ISARRAY'

test( 'ISARRAY : it should identify an array', (t) => {
  t.plan(3)
  t.equal( ISARRAY( [] ), true )
  t.equal( ISARRAY( {} ), false )
  t.equal( ISARRAY( 'string' ), false )
})
