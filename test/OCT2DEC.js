import test from 'tape';
import {OCT2DEC} from '../src/OCT2DEC';
import error from '../src/ERROR';

test('OCT2DEC', function(t) {
  t.plan(8)
  t.equal(OCT2DEC('8'), error.num);
  t.equal(OCT2DEC('60000000001'), error.num);
  t.equal(OCT2DEC('0'), 0);
  t.equal(OCT2DEC('7777777777'), -1);
  t.equal(OCT2DEC('4000000000'), -536870912);
  t.equal(OCT2DEC('3777777777'), 536870911);
  t.equal(OCT2DEC('54'), 44);
  t.equal(OCT2DEC('7777777533'), -165);
});
