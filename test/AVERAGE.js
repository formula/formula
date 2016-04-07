import test from 'tape';
import {AVERAGE} from '../src/AVERAGE';

test('AVERAGE', function(t) {

  t.plan(2);

  t.equal( AVERAGE(1,2,3), 2);
  t.equal( AVERAGE(4,5,6), 5);

});
