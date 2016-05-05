import test from 'tape'
import error from '../src/ERROR'
import {VLOOKUP} from '../src/VLOOKUP'

test('VLOOKUP', (t) => {
  t.plan(5)

  t.equal( VLOOKUP(
    1,
    [
      [1, 'Foo', 'Good'],
      [2, 'Bar', 'Bad']
    ],
    3 ),
    'Good'
  )

  t.equal( VLOOKUP(
    2,
    [
      [1, 'Bad'],
      [2, 'Good']
    ], 2),
    'Good'
  )

  t.equal( VLOOKUP(
    1,
    [
      [1, 'Good'],
      [2, 'Bad']
    ] ), 1
  )

  t.equal( VLOOKUP(
    2,
    [
      [1, 'Bad'],
      [2, 'Good']
    ] ),
    2
  )

  t.equal( VLOOKUP(
    1,
    [
      [1, 'Foo', 'Good'],
      [2, 'Bar', 'Bad']
    ],
    4 ),
    error.ref
  )

})
