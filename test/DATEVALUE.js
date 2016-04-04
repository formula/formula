import {DATEVALUE} from '../src/DATEVALUE';
import test from 'tape';

test('DATEVALUE', function(t) {
  t.plan(1)
  t.equal( DATEVALUE("1/1/2008"), 39448 );
});
