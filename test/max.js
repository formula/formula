import test from 'tape';
import {max} from '../src/max';

test('MAX : Should identify largest value in set', function(t) {


  t.plan(4);
  t.equal( max(2, 4), 4 );
  t.equal( max(200, 400, 700), 700 );
  t.equal( max([200, 400], 700), 700 );
  t.equal( max([200], [400], [700]), 700 );

});
