import left from '../src/left';
import test from 'tape';

test('left', function(t) {
  t.plan(4)
  t.equal( left('1234', 1), '1' );
  t.equal( left('1234', 2), '12' );
  t.equal( left('1234', 3), '123' );
  t.equal( left('1234', 4), '1234' );
});
