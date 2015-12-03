import test from 'tape';
import {LT} from '../src/LT';

test('LT', function(t) {

  t.plan(4)
  t.equal( LT(2, 4), true );
  t.equal( LT(200, 800), true );
  t.equal( LT(20000000, 40000000), true );
  t.deepEqual( LT( [0,1,2,3,4,5,6,7], 5 ), [
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
