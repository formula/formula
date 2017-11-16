import acot from '../src/acot';
import error from '../src/error';
import test from 'tape';

test('acot', function(t) {
  t.plan(4)
  t.equal( acot(1), 0.7853981633974483 );
  t.equal( acot(0),  1.5707963267948966 );
  t.equal( acot(NaN), error.value );
  t.equal( acot('invalid'), error.value );
})
