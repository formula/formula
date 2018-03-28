import asinh from '../src/asinh';
import { ERRORTYPES as error } from '../src/error';
import test from 'tape';

test('asinh', function(t) {
  t.plan(4)
  t.equal( asinh(0), 0 );
  t.equal( asinh(1), 0.8813735870195429 );
  t.equal( asinh(NaN), error.value );
  t.equal( asinh('invalid'), error.value );
})
