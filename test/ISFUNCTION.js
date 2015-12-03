import test from 'tape';
import {ISFUNCTION} from '../src/ISFUNCTION';

test('ISFUNCTION', function(t) {
  t.plan(5);
  t.equal( ISFUNCTION(setInterval), true);
  t.equal( ISFUNCTION(function() {}), true);
  t.equal( ISFUNCTION(5), false);
  t.equal( ISFUNCTION('invalid'), false);
  t.equal( ISFUNCTION(new Date()), false);
});
