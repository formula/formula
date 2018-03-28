import asin from '../src/asin';
import { ERRORTYPES as error } from '../src/error';
import test from 'tape';

test('asin', function(t) {
  t.plan(4)
  t.equal( asin(0.5), 0.5235987755982989 );
  t.equal( asin(-1),  -1.5707963267948966 );
  t.equal( asin(NaN), error.value );
  t.equal( asin('invalid'), error.value );
})
