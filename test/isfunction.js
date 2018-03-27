import test from 'tape';
import isfunction from '../src/isfunction';

test('isfunction', function(t) {
  t.plan(5);
  t.equal( isfunction(setInterval), true);
  t.equal( isfunction(function() {}), true);
  t.equal( isfunction(5), false);
  t.equal( isfunction('invalid'), false);
  t.equal( isfunction(new Date()), false);
});
