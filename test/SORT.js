import test from 'tape';
import {SORT} from '../src/SORT';

test('SORT', function(t) {
  t.plan(5);
  var a1 = [4, 3, 2, 1].map( n => [n, -n*n, n*n*n]);

  t.deepEqual( SORT( a1,  1, true ), [
    [1, -1, 1],
    [2, -4, 8],
    [3, -9, 27],
    [4, -16, 64],
  ]);

  t.deepEqual( SORT( a1,  2, false ), [
    [1, -1, 1],
    [2, -4, 8],
    [3, -9, 27],
    [4, -16, 64],
  ]);

  t.deepEqual( SORT( a1,  3, false ), [
    [4, -16, 64],
    [3, -9, 27],
    [2, -4, 8],
    [1, -1, 1],
  ]);

  var a2 = [
    ['b', 'b'],
    ['b', 'a'],
    ['a', 'b'],
    ['a', 'a']
  ]

  t.deepEqual( SORT( a2, 1, true, 2, true ), [
    ['a', 'a'],
    ['a', 'b'],
    ['b', 'a'],
    ['b', 'b']
  ] )

  var objectsToSort = [
    { foo: 10, bar: 30},
    { foo: 20, bar: 40},
    { foo: 30, bar: 20},
    { foo: 40, bar: 20},
    { foo: 40, bar: 10},
  ]

  t.deepEqual( SORT( objectsToSort, 'foo', true, 'bar', true ), [
    { foo: 10, bar: 30},
    { foo: 20, bar: 40},
    { foo: 30, bar: 20},
    { foo: 40, bar: 10},
    { foo: 40, bar: 20}
  ] )
});
