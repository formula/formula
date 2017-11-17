import atanh from '../src/atanh';
import round from '../src/round';
import error from '../src/error';
import test from 'tape';

test('atanh', function(t) {
  t.plan(5)
  t.equal( atanh(0), 0 );
  t.equal( round(atanh(0.5), 12), 0.549306144334 );
  t.equal( atanh(1), Infinity );
  t.equal( atanh(NaN), error.value );
  t.equal( atanh('invalid'), error.value );
})
