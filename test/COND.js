import {COND} from '../src/COND';
import test from 'tape';
import error from '../src/ERROR';

test('COND', function(t) {
  t.plan(10);
  t.equal( typeof COND, 'function' );
  t.equal( COND( false, 1), undefined );
  t.equal( COND( true, undefined ), undefined );
  t.equal( COND( true, null, undefined ), null );
  t.equal( COND( true, 1, false, 2, 3), 1 );
  t.equal( COND( false, 1, true, 2, 3), 2 );
  t.equal( COND( false, 1, false, 2, 3), 3 );
  t.equal( COND( true, false, false, 2, 3), false );
  t.equal( COND( true, false, true, 2, 3), false );
  t.equal( COND( false, false, true, true, 3), true );
});
