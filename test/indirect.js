/* indirection
 * turn an address or cell index into a reference
 * assumes that `this` references the current sheet.
 */
import test from 'tape';
import {indirect} from '../src/indirect';

test('indirect', function(t) {
  t.plan(1)
  t.equal(typeof indirect, 'function')
});
