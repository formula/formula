import test from 'tape';
import lt from '../src/lt';

test('lt', function(t) {

  t.plan(4)
  t.equal( lt(2, 4), true );
  t.equal( lt(200, 800), true );
  t.equal( lt(20000000, 40000000), true );
  t.deepEqual( lt( [0,1,2,3,4,5,6,7], 5 ), [
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    false ]
  );

})
