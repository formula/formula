import iswholenumber from '../fn/iswholenumber';
import test from 'tape';

test('iswholenumber', function(t) {
  t.plan(3)
  t.equal( iswholenumber(1), true );
  t.equal( iswholenumber(1.0), true );
  t.equal( iswholenumber(1.5), false );
});
