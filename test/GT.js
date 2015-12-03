import test from 'tape';
import {GT} from '../src/GT';

test('GT', function(t) {

  t.plan(4)
  t.equal( GT(2, 4), false );
  t.equal( GT(200, 800), false );
  t.equal( GT(20000000, 40000000), false );
  t.deepEqual( GT( [0,1,2,3,4,5,6,7], 5 ), [
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    true ]
  );

})
