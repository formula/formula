import test from 'tape'
import { ERRORTYPES as error } from '../src/error'
import diff from '../src/diff'

test('diff', (t) => {
  t.plan(1)
  t.deepEqual( diff( { a: 1, c: 3 }, { a: 2, b: 2} ),
  {
    diff: { a: { left: 1, right: 2 } },
    unique_left: [ 'b' ],
    unique_right: [ 'c' ]
  })
})
