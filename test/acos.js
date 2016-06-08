import {acos} from '../src/acos';
import error from '../src/error';
import test from 'tape';

test('acos', function(t) {
  t.plan(3)
  t.equal( acos(1), 0 );
  t.equal( acos(NaN), error.value );
  t.equal( acos('invalid'), error.value );
})
