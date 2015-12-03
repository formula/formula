import test from 'tape';
import {CONCATENATE} from '../src/CONCATENATE';

test('CONCATENATE', function (t) {

  t.plan(3);
  t.equal( CONCATENATE('a', 'b'), 'ab');
  t.equal( CONCATENATE(1, 'fooa'), '1fooa');
  t.equal( CONCATENATE(3, 'foob'), '3foob');

});
