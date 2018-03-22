import isError from "./iserror";
import error from "./error";
import parseNumber from "./numbervalue";
import PMT from "./pmt";
import FV from "./fv";

function cumipmt(rate, periods, value, start, end, type) {
  // Credits: algorithm inspired by Apache OpenOffice
  // Credits: Hannes Stiebitzhofer for the translations of function and variable names
  rate = parseNumber(rate);
  periods = parseNumber(periods);
  value = parseNumber(value);

  // check if any inputs are errors.
  if (isError(rate) || isError(periods) || isError(value)) {
    return error.value;
  }

  // Return error if either rate, periods, or value are lower than or equal to zero
  if (rate <= 0 || periods <= 0 || value <= 0) {
    return error.num;
  }

  // Return error if start < 1, end < 1, or start > end
  if (start < 1 || end < 1 || start > end) {
    return error.num;
  }

  // Return error if type is neither 0 nor 1
  if (type !== 0 && type !== 1) {
    return error.num;
  }

  // Compute cumulative interest
  var payment = PMT(rate, periods, value, 0, type);
  var interest = 0;

  if (start === 1) {
    if (type === 0) {
      interest = -value;
      start++;
    }
  }

  for (var i = start; i <= end; i++) {
    if (type === 1) {
      interest += FV(rate, i - 2, payment, value, 1) - payment;
    } else {
      interest += FV(rate, i - 1, payment, value, 0);
    }
  }
  interest *= rate;

  // Return cumulative interest
  return interest;
}

export default cumipmt;
