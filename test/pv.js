import test from 'tape';
import pv from '../src/pv';

test('pv', function(t) {
  t.plan(1);
  t.is(pv(0.075/12, 2*12, 250, 0, 0), -5555.605845933733)
});
