/* FILTER a dataset by reduction
 *
 */

import test from 'tape';
import {filter} from '../src/filter'

test('filter', function(t) {
  t.plan(4)
  t.deepEqual( filter( [[1], [2]], [true, false], [true, true] ), [[1]] )
  t.deepEqual( filter( [[1], [2]], [false, true], [true, true] ), [[2]] )
  t.deepEqual( filter( [[1, 1], [2, 2], [3, 3]],
    [false, true, true], [true, true, true] ),
    [[2, 2], [3, 3]] )

  t.deepEqual( filter( [{ id: 1 }, { id: 2 }], [true, false], [true, true] ), [{ id: 1 }] )

});
