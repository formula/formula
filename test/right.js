import {right} from '../src/right';
import test from 'tape';

test('right', function(t) {
  t.plan(4)
  t.equal( right('1234', 1), '4' );
  t.equal( right('1234', 2), '34' );
  t.equal( right('1234', 3), '234' );
  t.equal( right('1234', 4), '1234' );
});
