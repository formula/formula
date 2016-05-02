import test from 'tape';
import {AVERAGE} from '../src/AVERAGE';
import error from '../src/ERROR'

test('AVERAGE', function(t) {

  t.plan(3);

  t.equal( AVERAGE(1,2,3), 2);
  t.equal( AVERAGE(4,5,6), 5);
  t.equal( AVERAGE(4,5,"foo"), error.value);

});
