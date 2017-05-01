/* FILTER a dataset by reduction
 *
 */

import test from 'tape';
import query from '../fn/query'

test('query', function(t) {
  t.plan(22)

  let table = [
    { id: 1 },
    { id: 2 },
    { id: 'abc' }
  ]

  let table2 = [
    { foo: 'a' },
    { foo: 'b' },
    { foo: 'b' }
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


  t.deepEqual( query( table2, { foo: { $in: ['a'] } } ), table2.filter( d => d.foo == 'a' ) )
  t.deepEqual( query( table2, { foo: { $in: ['b'] } } ), table2.filter( d => d.foo == 'b' ) )
  t.deepEqual( query( table2, { foo: { $in: ['a', 'b'] } } ), table2 )


  t.deepEqual( query( table, { $and: [{ id: 1}, { id: { $ne: 'abc' }}] } ), [{ id: 1}] )
  t.deepEqual( query( table, { $or: [{ id: 1}, { id: 2}] } ), [{ id: 1 }, { id: 2 }] )

  t.deepEqual( query( table, { id: { $exists: true } } ), table )
  t.deepEqual( query( table, { id: { $exists: false } } ), [] )

  t.deepEqual( query( [{ id: 1 }, { foo: 1}], { $or: [{ id: { $exists: true } }, { foo: 1 }] } ), [{ id: 1 }, { foo: 1}] )
  t.deepEqual( query( [{ id: 1, foo: 1 }, { foo: 1}], { $and: [{ id: { $exists: true } }, { foo: 1 }] } ), [{ id: 1, foo: 1 }] )
  t.throws( () => query( [{}], { $and: { foo: 'bar' } } ), '$and expects array! ' )
  t.throws( () => query( [{}], { $or: { foo: 'bar' } } ), '$or expects array! ' )

});
