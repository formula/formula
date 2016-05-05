import test from 'tape'
import error from '../src/ERROR'
import {GUID} from '../src/GUID'

test('GUID', (t) => {
  t.plan(1)
  t.equal( GUID().length, 36)
})
