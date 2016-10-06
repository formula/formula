import numbervalue from '../fn/numbervalue';
import error from '../fn/error';
import test from 'tape';

test('numbervalue', function(t) {
  t.plan(13);
  t.equal( numbervalue(""), error.value, 'error.should pass through call');
  t.equal( numbervalue("2"), 2);
  t.equal( numbervalue("20"), 20);
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
