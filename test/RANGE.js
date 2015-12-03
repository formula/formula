import {RANGE} from '../src/RANGE';
import test from 'tape';
import error from '../src/ERROR';

test('RANGE', function(t) {
  t.plan(1)
  t.equal( typeof RANGE, 'function' )
});
