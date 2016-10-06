import acos from '../fn/acos';
import error from '../fn/error';
import test from 'tape';

test('acos', function(t) {
  t.plan(3)
  t.equal( acos(1), 0 );
  t.equal( acos(NaN), error.value );
  t.equal( acos('invalid'), error.value );
})
