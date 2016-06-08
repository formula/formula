import test from 'tape'
import error from '../src/error'
import {hlookup} from '../src/hlookup'

test('HLOOKUP', (t) => {
  t.plan(5)

  t.equal( hlookup(
    1,
    [
      [1, 2],
      ['Good', 'Bad'],
      ['Foo', 'Bar']
    ],
    2 ),
    'Good'
  )

  t.equal( hlookup(
    2,
    [
      [1, 2],
      ['Foo', 'Bar'],
      ['Bad', 'Good']
    ],
    3),
    'Good'
  )

  t.equal( hlookup(
    1,
    [
      [1, 2],
      ['Foo', 'Bar']
      ['Bad', 'Good']
    ] ), 1
  )

  t.equal( hlookup(
    2,
    [
      [1, 2],
      ['Foo', 'Bar']
      ['Bad', 'Good']
    ] ),
    2
  )

  // index exceeds table size
  t.equal( hlookup(
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
