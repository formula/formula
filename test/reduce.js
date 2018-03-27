// FIXME: Write tests for MATCH
import test from 'tape';
import reduce from '../src/reduce';

test('reduce', function(t) {
  t.plan(1);
  t.deepEqual( reduce([1, 2, 3], (p, v) => p+v), 6 );
});
