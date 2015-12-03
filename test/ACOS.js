import {ACOS} from '../src/ACOS';
import error from '../src/ERROR';
import test from 'tape';

test('ACOS', function(t) {
  t.plan(3)
  t.equal( ACOS(1), 0 );
  t.equal( ACOS(NaN), error.value );
  t.equal( ACOS('invalid'), error.value );
})
