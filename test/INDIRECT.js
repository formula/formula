/* indirection
 * turn an address or cell index into a reference
 * assumes that `this` references the current sheet.
 */
import test from 'tape';
import {INDIRECT} from '../src/INDIRECT';

test('INDIRECT : should return a cell reference', function(t) {
  t.plan(1)
  t.equal(typeof INDIRECT, 'function')
});
