import test from 'tape';
import {GTE} from '../src/GTE';

test('GTE', function(t) {

  t.plan(4)
  t.equal( GTE(2, 4), false );
  t.equal( GTE(200, 800), false );
  t.equal( GTE(20000000, 40000000), false );
  t.deepEqual( GTE( [0,1,2,3,4,5,6,7], 5 ), [
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
