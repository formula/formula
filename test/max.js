import test from 'tape';
import max from '../src/max';

test('max', function(t) {
  t.plan(7);
  t.equal( max(), undefined );
  t.equal( max([]), undefined );
  t.equal( max(4), 4 );
  t.equal( max(2, 4), 4 );
  t.equal( max(200, 400, 700), 700 );
  t.equal( max([200, 400], 700), 700 );
  t.equal( max([200], [400], [700]), 700 );
});
