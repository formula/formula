import {N} from '../src/N';
import error from '../src/ERROR';
import test from 'tape';

test('N : should convert value to number', function(t) {
  t.plan(6);
  t.equal( N(1), 1, 'Should still be 1');
  t.equal( N(100.5), 100.5, 'Should still be 100.5');
  t.equal( N(true), 1, 'True should be 1');
  t.equal( N(false), 0, 'False should be 0');
  t.equal( N(error.value), error.value, 'error.should pass through call');
  t.equal( N('invalid'), 0, 'Anything else should be 0');
});
