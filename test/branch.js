import branch from '../fn/branch';
import test from 'tape';
import error from '../fn/error';

test('branch', function(t) {
  t.plan(21);
  
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

  t.equal( branch( () => true, () => 'Yes', () => 'No' ), 'Yes' );
  t.equal( branch( () => false, () => 'Yes', () => 'No' ), 'No' );

  // check for truthy and falsy values
  t.equal( branch( 6, 1, 2), 1 );
  t.equal( branch( {}, 1, 2), 1 );
  t.equal( branch( 1, 1, 2), 1 );
  t.equal( branch( [], 1, 2), 1 );

  t.equal( branch( 0, 1, 2), 2 );
  t.equal( branch( '', 1, 2), 2 );
  t.equal( branch( null, 1, 2), 2 );
  t.equal( branch( undefined, 1, 2), 2 );
  t.equal( branch( NaN, 1, 2), 2 );

});
