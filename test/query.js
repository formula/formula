/* FILTER a dataset by reduction
 *
 */

import test from 'tape';
import query from '../src/query'

test('query', function(t) {
  t.plan(10)

  let table = [
    { id: 1 },
    { id: 2 },
    { id: 'abc' }
  ]

  t.deepEqual( query( table, { } ), table )
  t.deepEqual( query( table, { id: 1 } ), [{ id: 1 }] )
  t.deepEqual( query( table, { id: 'abc' } ), [{ id: 'abc' }] )
  t.deepEqual( query( table, { id: 'Abc' } ), [{ id: 'abc' }] )
  t.deepEqual( query( table, { id: { $eq: 1 } } ), [{ id: 1 }] )
  t.deepEqual( query( table, { id: { $ne: 2 } } ), [{ id: 1 }, { id: 'abc' }] )
  t.deepEqual( query( table, { id: { $gt: 0, $lt: 3 } } ), [{ id: 1 }, { id: 2 }] )
  t.deepEqual( query( table, { id: { $gte: 1, $lte: 2 } } ), [{ id: 1 }, { id: 2 }] )
  t.deepEqual( query( table, { id: { $text: 'ab?' } } ), [{ id: 'abc' }] )
  t.deepEqual( query( table, { id: { $in: [1, 2] } } ), [{ id: 1 }, { id: 2 }] )

});
