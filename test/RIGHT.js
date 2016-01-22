import {RIGHT} from '../src/RIGHT';
import test from 'tape';

test('RIGHT', function(t) {
  t.plan(4)
  t.equal( RIGHT('1234', 1), '4' );
  t.equal( RIGHT('1234', 2), '34' );
  t.equal( RIGHT('1234', 3), '234' );
  t.equal( RIGHT('1234', 4), '1234' );
});
