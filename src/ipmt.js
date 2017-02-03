import pmt from './pmt'
import fv from './fv'

export default function impt(rate, per, nper, pv, fv, type) {
  var pmt = pmt(rate, nper, pv, fv, type),
  fv = fv(rate, per - 1, pmt, pv, type),
  result = fv * rate;

  // account for payments at beginning of period versus end.
  if (type) {
    result /= (1 + rate);
  }

  return result;
}
