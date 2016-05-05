import test from 'tape'
import error from '../src/ERROR'
import {DIFF} from '../src/DIFF'

test('DIFF', (t) => {
  t.plan(1)
  t.deepEqual( DIFF( { a: 1, c: 3 }, { a: 2, b: 2} ),
  {
    diff: { a: { left: 1, right: 2 } },
    unique_left: [ 'b' ],
    unique_right: [ 'c' ]
  })
})
