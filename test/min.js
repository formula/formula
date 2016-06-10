import test from 'tape';
import {min} from '../src/min';

test('MIN : Should identify smallest value in set', function(t) {
  t.plan(7);
  t.equal( min(), undefined );
  t.equal( min([]), undefined );
  t.equal( min(2), 2 );
  t.equal( min(2, 4), 2 );
  t.equal( min(2, 400, 700), 2 );
  t.equal( min([2, 400], 700), 2 );
  t.equal( min([2], [400], [700]), 2 );
});
