import datevalue from '../fn/datevalue'
import test from 'tape'
import error from '../fn/error'

test('datevalue', function(t) {
  t.plan(3)
  t.equal( datevalue("1/1/2008"), 39448 );
  t.equal( datevalue(39448), 39448 );
  t.equal( datevalue("foo"), error.na );
});
