import test from 'tape';
import fv from '../fn/fv';

test('fv', function(t) {
  t.plan(1);
  t.is(fv(0.075/12, 2*12,-250, -5000, 1), 12298.46381980343)
});
