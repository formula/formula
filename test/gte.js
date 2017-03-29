import test from 'tape';
import gte from '../fn/gte';

test('gte', function(t) {

  t.plan(4)
  t.equal( gte(2, 4), false );
  t.equal( gte(200, 800), false );
  t.equal( gte(20000000, 40000000), false );
  t.deepEqual( gte( [0,1,2,3,4,5,6,7], 5 ), [
    false,
    false,
    false,
    false,
    false,
    true,
    true,
    true ]
  );

})
