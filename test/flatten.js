import test from 'tape';
import flatten from '../src/flatten';

test('flatten', (t) => {
  t.plan(2)
  t.deepEqual( flatten( [[1,2], [3,4]] ), [1,2,3,4] );
  t.deepEqual( flatten( [[1,2,3], [4,5]] ), [1,2,3,4,5] );
});
