import test from 'tape';
import {min} from '../src/min';

test('MIN : Should identify smallest value in set', function(t) {


  t.plan(4);
  t.equal( min(2, 4), 2 );
  t.equal( min(2, 400, 700), 2 );
  t.equal( min([2, 400], 700), 2 );
  t.equal( min([2], [400], [700]), 2 );

});
