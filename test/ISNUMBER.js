import {ISNUMBER} from '../src/ISNUMBER';
import test from 'tape';

test('ISNUMBER', function(t) {
  t.plan(7)
  t.equal( ISNUMBER(1), true );
  t.equal( ISNUMBER(1.0), true );
  t.equal( ISNUMBER(1.5), true );
  t.equal( ISNUMBER("foo"), false );
  t.equal( ISNUMBER(NaN), false );
  t.equal( ISNUMBER(Number.POSITIVE_INFINITY), false );
  t.equal( ISNUMBER(Number.NEGATIVE_INFINITY), false );
});
