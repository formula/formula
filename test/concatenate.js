import test from 'tape';
import concatenate from '../src/concatenate';

test('concatenate', function (t) {

  t.plan(3);
  t.equal( concatenate('a', 'b', 'c'), 'abc');
  t.equal( concatenate(1, 'fooa'), '1fooa');
  t.equal( concatenate(3, 'foob'), '3foob');

});
