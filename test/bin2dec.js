import test from 'tape';
import {bin2dec} from '../src/bin2dec';

test('bin2dec', function (t) {

  t.plan(7)
  t.equal( bin2dec('00000000'), 0);
  t.equal( bin2dec('00000001'), 1);
  t.equal( bin2dec('00000010'), 2);
  t.equal( bin2dec('00000100'), 4);
  t.equal( bin2dec('00000101'), 5);
  t.equal( bin2dec('1011111111'), -257);
  t.equal( bin2dec('1111111111'), -1);

});
