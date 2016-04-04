import {DATEVALUE} from '../src/DATEVALUE'
import test from 'tape'
import error from '../src/ERROR'

test('DATEVALUE', function(t) {
  t.plan(3)
  t.equal( DATEVALUE("1/1/2008"), 39448 );
  t.equal( DATEVALUE(39448), 39448 );
  t.equal( DATEVALUE("foo"), error.na );
});
