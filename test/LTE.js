import test from 'tape';
import {LTE} from '../src/LTE';

test('LTE : Should compare two values and return true or false', function(t) {


  t.plan(6);
  t.equal( LTE(undefined, 4), false );
  t.equal( LTE(4, null), false );
  t.equal( LTE(2, 4), true );
  t.equal( LTE(200, 800), true );
  t.equal( LTE(20000000, 40000000), true );

  t.deepEqual( LTE( [0,1,2,3,4,5,6,7,8,9,10], 5 ), [
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
