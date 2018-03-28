import atan2 from '../src/atan2';
import { ERRORTYPES as error } from '../src/error';
import test from 'tape';

test('atan2', function(t) {
  t.plan(4)
  t.equal( atan2(90, 15), 1.4056476493802699 );
  t.equal( atan2(15, 90), 0.16514867741462683 );
  t.equal( atan2(NaN, NaN), error.value );
  t.equal( atan2('invalid'), error.value );
})
