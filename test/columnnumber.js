import columnnumber from '../fn/columnnumber';
import error from '../fn/error';
import test from 'tape';

test('columnnumber', function(t) {
  t.plan(5);
  t.equal( columnnumber('A'), 0 );
  t.equal( columnnumber('Z'), 25 );
  t.equal( columnnumber('AA'), 26 );
  t.equal( columnnumber('AAA'), 702 );
  t.equal( columnnumber(NaN), error.value );
})
