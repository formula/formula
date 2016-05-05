import test from 'tape'
import error from '../src/ERROR'
import {NOT} from '../src/NOT'

test('NOT', (t) => {
  t.plan(5)
  t.equal( NOT( true ), false)
  t.equal( NOT( false ), true)
  t.equal( NOT( 1 ), false)
  t.equal( NOT( 0 ), true)
  t.equal( NOT( 'foo' ), error.value)
})
