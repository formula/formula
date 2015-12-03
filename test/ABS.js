import {ABS} from '../src/ABS';
import test from 'tape';
import error from '../src/ERROR';

test('ABS', function(t) {
  t.plan(6)
  t.equal( ABS(1), 1, 'Should still be 1');
  t.equal( ABS(-1), 1, 'Should still be 1');
  t.equal( ABS('foo'), error.value, 'Should still be error.value');
  t.equal( ABS(NaN), error.value, 'Should still be error.value');
  t.equal( ABS(Number.POSITIVE_INFINITY), error.value, 'Should still be error.value');
  t.equal( ABS(Number.NEGATIVE_INFINITY), error.value, 'Should still be error.value');
});
