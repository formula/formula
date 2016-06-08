import test from 'tape';
import {oct2dec} from '../src/oct2dec';
import error from '../src/error';

test('OCT2DEC', function(t) {
  t.plan(8)
  t.equal(oct2dec('8'), error.num);
  t.equal(oct2dec('60000000001'), error.num);
  t.equal(oct2dec('0'), 0);
  t.equal(oct2dec('7777777777'), -1);
  t.equal(oct2dec('4000000000'), -536870912);
  t.equal(oct2dec('3777777777'), 536870911);
  t.equal(oct2dec('54'), 44);
  t.equal(oct2dec('7777777533'), -165);
});
