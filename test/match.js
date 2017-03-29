// FIXME: Write tests for MATCH
import test from 'tape';
import match from '../fn/match';
import error from '../fn/error';

test('match', function(t) {
  t.plan(6);
  t.equal( match( 'b', ['a', 'b', 'c'] ), 2 );
  t.equal( match( 'b', ['aa', 'bb', 'cc'], 0 ), error.na );
  t.equal( match( 'a?', ['aa', 'bb', 'cc'], 0 ), 1 );
  t.equal( match( '?b', ['aa', 'bb', 'cc'], 0 ), 2 );
  t.equal( match( 'b~', ['aa', 'b?', 'cc'], 0 ), 2 );
  t.equal( match( 'a*z', ['aa', 'bb', 'a....z'], 0 ), 3 );
});
