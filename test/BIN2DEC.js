import test from 'tape';
import {BIN2DEC} from '../src/BIN2DEC';

test('BIN2DEC', function (t) {

  t.plan(7)
  t.equal( BIN2DEC('00000000'), 0);
  t.equal( BIN2DEC('00000001'), 1);
  t.equal( BIN2DEC('00000010'), 2);
  t.equal( BIN2DEC('00000100'), 4);
  t.equal( BIN2DEC('00000101'), 5);
  t.equal( BIN2DEC('1011111111'), -257);
  t.equal( BIN2DEC('1111111111'), -1);

});
