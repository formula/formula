import abs from '../src/abs';
import test from 'tape';
import error from '../src/error';

test('abs', function(t) {
  t.plan(6)
  t.equal( abs(1), 1, 'Should still be 1');
  t.equal( abs(-1), 1, 'Should still be 1');
  t.equal( abs('foo'), error.value, 'Should still be error.value');
  t.equal( abs(NaN), error.value, 'Should still be error.value');
  t.equal( abs(Number.POSITIVE_INFINITY), error.value, 'Should still be error.value');
  t.equal( abs(Number.NEGATIVE_INFINITY), error.value, 'Should still be error.value');
});
