import test from 'tape'
import error from '../src/error'
import {vlookup} from '../src/vlookup'

test('vlookup', (t) => {
  t.plan(5)

  t.equal( vlookup(
    1,
    [
      [1, 'Foo', 'Good'],
      [2, 'Bar', 'Bad']
    ],
    3 ),
    'Good'
  )

  t.equal( vlookup(
    2,
    [
      [1, 'Bad'],
      [2, 'Good']
    ], 2),
    'Good'
  )

  t.equal( vlookup(
    1,
    [
      [1, 'Good'],
      [2, 'Bad']
    ] ), 1
  )

  t.equal( vlookup(
    2,
    [
      [1, 'Bad'],
      [2, 'Good']
    ] ),
    2
  )

  t.equal( vlookup(
    1,
    [
      [1, 'Foo', 'Good'],
      [2, 'Bar', 'Bad']
    ],
    4 ),
    error.ref
  )

})
