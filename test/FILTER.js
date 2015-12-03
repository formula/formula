/* FILTER a dataset by reduction
 *
 */

import test from 'tape';
import {FILTER} from '../src/FILTER'

test('FILTER', function(t) {
  t.plan(3)
  t.deepEqual( FILTER( [[1], [2]], [true, false], [true, true] ), [[1]] )
  t.deepEqual( FILTER( [[1], [2]], [false, true], [true, true] ), [[2]] )
  t.deepEqual( FILTER( [[1, 1], [2, 2], [3, 3]],
    [false, true, true], [true, true, true] ),
    [[2, 2], [3, 3]] )
});
