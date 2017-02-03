import acosh from '../src/acosh';
import error from '../src/error';
import test from 'tape';

test('acosh', function(t) {
  t.plan(4)
  t.equal( acosh(1), 0 );
  t.equal( acosh(2),  1.3169578969248166 );
  t.equal( acosh(NaN), error.value );
  t.equal( acosh('invalid'), error.value );
})
