import isnumber from '../src/isnumber';
import test from 'tape';

test('isnumber', function(t) {
  t.plan(7)
  t.equal( isnumber(1), true );
  t.equal( isnumber(1.0), true );
  t.equal( isnumber(1.5), true );
  t.equal( isnumber("foo"), false );
  t.equal( isnumber(NaN), false );
  t.equal( isnumber(Number.POSITIVE_INFINITY), false );
  t.equal( isnumber(Number.NEGATIVE_INFINITY), false );
});
