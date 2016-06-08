import {numbervalue} from '../src/numbervalue';
import error from '../src/error';
import test from 'tape';

test('NUMBERVALUE : should convert value to number', function(t) {
  t.plan(11);
  t.equal( numbervalue(""), error.value, 'error.should pass through call');
  t.equal( numbervalue("1.2.2"), error.value);
  t.equal( numbervalue("1.2a.2"), error.value);
  t.equal( numbervalue("1.2%.2"), error.value);
  t.equal( numbervalue("1.2.2", ",", "."), 122);
  t.equal( numbervalue(1.2), 1.2);
  t.equal( numbervalue("1.2"), 1.2);
  t.equal( numbervalue("1.2%"), 0.012);
  t.equal( numbervalue("1,111.2"), 1111.2);
  t.equal( numbervalue("1,111,111.2"), 1111111.2);
  t.equal( numbervalue("1.111.111,2", ',', '.'), 1111111.2);
});
