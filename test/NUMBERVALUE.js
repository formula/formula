import {NUMBERVALUE} from '../src/NUMBERVALUE';
import error from '../src/ERROR';
import test from 'tape';

test('NUMBERVALUE : should convert value to number', function(t) {
  t.plan(11);
  t.equal( NUMBERVALUE(""), error.value, 'error.should pass through call');
  t.equal( NUMBERVALUE("1.2.2"), error.value);
  t.equal( NUMBERVALUE("1.2a.2"), error.value);
  t.equal( NUMBERVALUE("1.2%.2"), error.value);
  t.equal( NUMBERVALUE("1.2.2", ",", "."), 122);
  t.equal( NUMBERVALUE(1.2), 1.2);
  t.equal( NUMBERVALUE("1.2"), 1.2);
  t.equal( NUMBERVALUE("1.2%"), 0.012);
  t.equal( NUMBERVALUE("1,111.2"), 1111.2);
  t.equal( NUMBERVALUE("1,111,111.2"), 1111111.2);
  t.equal( NUMBERVALUE("1.111.111,2", ',', '.'), 1111111.2);
});
