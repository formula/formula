import unique from '../fn/unique';
import test from 'tape';
import error from '../fn/error';

test('unique', function(t) {
  t.plan(1)
  t.assert( unique( [1,1,1,2,3] ), [1,2,3] );
});
