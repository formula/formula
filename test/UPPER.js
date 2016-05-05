import test from 'tape'
import error from '../src/ERROR'
import {UPPER} from '../src/UPPER'

test('UPPER', (t) => {
  t.plan(1)
  t.equal( UPPER( 'foo' ), 'FOO')
})
