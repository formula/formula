import {UNIQUE} from '../src/UNIQUE';
import test from 'tape';
import error from '../src/ERROR';

test('UNIQUE', function(t) {
  t.plan(2)
  t.ok( UNIQUE );
  t.assert( UNIQUE( [1,1,1,2,3] ), [1,2,3] );
});
