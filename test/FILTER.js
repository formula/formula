/* FILTER a dataset by reduction
 *
 */

import test from 'tape';
import {FILTER} from '../src/FILTER'

test('FILTER', function(t) {
  t.plan(4)
  t.deepEqual( FILTER( [[1], [2]], [true, false], [true, true] ), [[1]] )
  t.deepEqual( FILTER( [[1], [2]], [false, true], [true, true] ), [[2]] )
  t.deepEqual( FILTER( [[1, 1], [2, 2], [3, 3]],
    [false, true, true], [true, true, true] ),
    [[2, 2], [3, 3]] )

  t.deepEqual( FILTER( [{ id: 1 }, { id: 2 }], [true, false], [true, true] ), [{ id: 1 }] )

});
