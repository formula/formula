import test from 'tape'
import error from '../fn/error'
import upper from '../fn/upper'

test('upper', (t) => {
  t.plan(1)
  t.equal( upper( 'foo' ), 'FOO')
})
