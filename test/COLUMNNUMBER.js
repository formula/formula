import {COLUMNNUMBER} from '../src/COLUMNNUMBER';
import error from '../src/ERROR';
import test from 'tape';

test('COLUMNNUMBER', function(t) {
  t.plan(5);
  t.equal( COLUMNNUMBER('A'), 0 );
  t.equal( COLUMNNUMBER('Z'), 25 );
  t.equal( COLUMNNUMBER('AA'), 26 );
  t.equal( COLUMNNUMBER('AAA'), 702 );
  t.equal( COLUMNNUMBER(NaN), error.value );
})
