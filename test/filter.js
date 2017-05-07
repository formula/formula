/* FILTER a dataset by reduction
 *
 */

import test from 'tape';
import filter from '../fn/filter'

test('filter', function(t) {
  t.plan(6)
  // Check arrays
  t.deepEqual( filter( [[1], [2]], [true, false], [true, true] ), [[1]] )
  t.deepEqual( filter( [[1], [2]], [false, true], [true, true] ), [[2]] )
  t.deepEqual( filter( [[1, 1], [2, 2], [3, 3]],
    [false, true, true], [true, true, true] ),
    [[2, 2], [3, 3]] )

  t.deepEqual( filter( [{ id: 1 }, { id: 2 }], [true, false], [true, true] ), [{ id: 1 }] )

  // Check js functions
  t.deepEqual( filter( [[1], [2], [3] ], d => d > 2, d => d >= 3 ), [[3]] )


  // Check formula expressions
  t.deepEqual( filter( [{ foo: 1 }, { foo: 2 }, { foo: 3 } ], "foo > 2" ), [{ foo: 3}] )

});
