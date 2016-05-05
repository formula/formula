import test from 'tape'
import error from '../src/ERROR'
import {HLOOKUP} from '../src/HLOOKUP'

test('HLOOKUP', (t) => {
  t.plan(5)

  t.equal( HLOOKUP(
    1,
    [
      [1, 2],
      ['Good', 'Bad'],
      ['Foo', 'Bar']
    ],
    2 ),
    'Good'
  )

  t.equal( HLOOKUP(
    2,
    [
      [1, 2],
      ['Foo', 'Bar'],
      ['Bad', 'Good']
    ],
    3),
    'Good'
  )

  t.equal( HLOOKUP(
    1,
    [
      [1, 2],
      ['Foo', 'Bar']
      ['Bad', 'Good']
    ] ), 1
  )

  t.equal( HLOOKUP(
    2,
    [
      [1, 2],
      ['Foo', 'Bar']
      ['Bad', 'Good']
    ] ),
    2
  )

  // index exceeds table size
  t.equal( HLOOKUP(
    2,
    [
      [1, 2],
      ['Foo', 'Bar'],
      ['Bad', 'Good']
    ],
    4),
    error.ref
  )
})
