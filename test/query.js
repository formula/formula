/* FILTER a dataset by reduction
 *
 */

import test from 'tape';
import query from '../src/query'

test('query', function(t) {
  t.plan(19)

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
  t.deepEqual( query( table, { id: { $nin: [1, 2] } } ), [{ id: 'abc' }] )

  t.deepEqual( query( table, { $and: [{ id: 1}, { id: { $ne: 'abc' }}] } ), [{ id: 1}] )
  t.deepEqual( query( table, { $or: [{ id: 1}, { id: 2}] } ), [{ id: 1 }, { id: 2 }] )

  t.deepEqual( query( table, { id: { $exists: true } } ), table )
  t.deepEqual( query( table, { id: { $exists: false } } ), [] )

  t.deepEqual( query( [{ id: 1 }, { foo: 1}], { $or: [{ id: { $exists: true } }, { foo: 1 }] } ), [{ id: 1 }, { foo: 1}] )
  t.deepEqual( query( [{ id: 1, foo: 1 }, { foo: 1}], { $and: [{ id: { $exists: true } }, { foo: 1 }] } ), [{ id: 1, foo: 1 }] )
  t.throws( () => query( [{}], { $and: { foo: 'bar' } } ), '$and expects array! ' )
  t.throws( () => query( [{}], { $or: { foo: 'bar' } } ), '$or expects array! ' )

});
