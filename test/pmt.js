import test from 'tape';
import {pmt} from '../src/pmt';
import error from '../src/error';

test('should calculate payments', function(t) {
  t.plan(1)
  t.equal( typeof PMT, 'function')
  /* t.equal( pmt(0.06 / 12, 18 * 12, 0, 50000), -129.0811608679973);
  t.equal( pmt(0.1 / 12, 2 * 12, 100000, 1000000, 1), -42075.45683100995);
  t.equal( pmt(0.1 / 12, 2 * 12, 100000, 1000000), -42426.08563793503);
  t.equal( pmt(0.1 / 12, 2 * 12, 0, 1000000), -37811.59300418336);
  t.equal( pmt(0.1 / 12, 2 * 12, 100000), -4614.49263375167);
  t.equal( pmt(0, 2 * 12, 100000), -4166.666666666667);
  t.equal( pmt('invalid'), error.value);
  t.equal( pmt(1, 'invalid'), error.value); */
});
