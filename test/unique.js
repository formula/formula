import {unique} from '../src/unique';
import test from 'tape';
import error from '../src/error';

test('UNIQUE', function(t) {
  t.plan(2)
  t.ok( UNIQUE );
  t.assert( unique( [1,1,1,2,3] ), [1,2,3] );
});
