import atan from '../src/atan';
import error from '../src/error';
import test from 'tape';

test('atan', function(t) {
  t.plan(4)
  t.equal( atan(0), 0 );
  t.equal( atan(1), 0.7853981633974483 );
  t.equal( atan(NaN), error.value );
  t.equal( atan('invalid'), error.value );
})
