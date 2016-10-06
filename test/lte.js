import test from 'tape';
import lte from '../fn/lte';

test('lte', function(t) {


  t.plan(6);
  t.equal( lte(undefined, 4), false );
  t.equal( lte(4, null), false );
  t.equal( lte(2, 4), true );
  t.equal( lte(200, 800), true );
  t.equal( lte(20000000, 40000000), true );

  t.deepEqual( lte( [0,1,2,3,4,5,6,7,8,9,10], 5 ), [
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false,
    false,
    false ]
  );
});
