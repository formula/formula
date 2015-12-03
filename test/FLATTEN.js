import test from 'tape';
import {FLATTEN} from '../src/FLATTEN';

test('FLATTENs nested array', (t) => {
  t.plan(2)
  t.deepEqual( FLATTEN( [[1,2], [3,4]] ), [1,2,3,4] );
  t.deepEqual( FLATTEN( [[1,2,3], [4,5]] ), [1,2,3,4,5] );
});
