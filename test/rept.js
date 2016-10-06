import rept from '../fn/rept';
import test from 'tape';

test('rept', function(t) {
  t.plan(2)
  t.equal( rept('-*', 3), '-*-*-*' );
  t.equal( rept('repeat ', 5), 'repeat repeat repeat repeat repeat ' );
});
