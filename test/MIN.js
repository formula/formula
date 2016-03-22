import test from 'tape';
import {MIN} from '../src/MIN';

test('MIN : Should identify smallest value in set', function(t) {


  t.plan(4);
  t.equal( MIN(2, 4), 2 );
  t.equal( MIN(2, 400, 700), 2 );
  t.equal( MIN([2, 400], 700), 2 );
  t.equal( MIN([2], [400], [700]), 2 );

});
