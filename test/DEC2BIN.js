import test from 'tape';
import {DEC2BIN} from '../src/DEC2BIN';
import error from '../src/ERROR';

test('DEC2BIN', function(t) {
  t.plan(8)
  t.equal(DEC2BIN(9), '1001');
  t.equal(DEC2BIN(9, 4), '1001');
  t.equal(DEC2BIN(-100), '1110011100');
  t.equal(error.value, error.value);
  t.equal(DEC2BIN(512), error.num);
  t.equal(DEC2BIN('a'), error.value);
  t.equal(DEC2BIN(1, 'a'), error.value);
  t.equal(DEC2BIN(1, -1), error.num);
});
