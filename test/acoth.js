import acoth from '../src/acoth';
import error from '../src/error';
import test from 'tape';

test('acoth', function(t) {
  t.plan(4)
  t.equal( acoth(6), 0.16823611831060645 );
  t.equal( acoth(2),  0.5493061443340549 );
  t.equal( acoth(NaN), error.value );
  t.equal( acoth('invalid'), error.value );
})
