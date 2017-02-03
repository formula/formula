import atanh from '../src/atanh';
import error from '../src/error';
import test from 'tape';

test('atanh', function(t) {
  t.plan(5)
  t.equal( atanh(0), 0 );
  t.equal( atanh(0.5), 0.5493061443340549 );
  t.equal( atanh(1), Infinity );
  t.equal( atanh(NaN), error.value );
  t.equal( atanh('invalid'), error.value );
})
