import {branch} from '../src/branch';
import test from 'tape';
import error from '../src/error';

test('branch', function(t) {
  t.plan(10);
  t.equal( typeof branch, 'function' );
  t.equal( branch( false, 1), undefined );
  t.equal( branch( true, undefined ), undefined );
  t.equal( branch( true, null, undefined ), null );
  t.equal( branch( true, 1, false, 2, 3), 1 );
  t.equal( branch( false, 1, true, 2, 3), 2 );
  t.equal( branch( false, 1, false, 2, 3), 3 );
  t.equal( branch( true, false, false, 2, 3), false );
  t.equal( branch( true, false, true, 2, 3), false );
  t.equal( branch( false, false, true, true, 3), true );
});
