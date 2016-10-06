import cos from '../fn/cos';
import error from '../fn/error';
import test from 'tape';

test('cos', function(t) {
  t.plan(3);
  t.equal( cos(0), 1 );
  t.equal( cos(NaN), error.value );
  t.equal( cos('invalid'), error.value );
})
