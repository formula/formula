import isError from "./iserror";
import error from "./error";
import parseNumber from "./numbervalue";
import PMT from "./pmt";
import FV from "./fv";

function ipmt(rate, period, periods, present, future = 0, type = 0) {
  // parse numbers from input.
  rate = parseNumber(rate);
  period = parseNumber(period);
  periods = parseNumber(periods);
  present = parseNumber(present);
  future = parseNumber(future);
  type = parseNumber(type);

  if (isError(rate, period, periods, present, future, type)) {
    return error.value;
  }

  // Compute payment
  var payment = PMT(rate, periods, present, future, type);

  // Compute interest
  var interest;
  if (period === 1) {
    if (type === 1) {
      interest = 0;
    } else {
      interest = -present;
    }
  } else {
    if (type === 1) {
      interest = FV(rate, period - 2, payment, present, 1) - payment;
    } else {
      interest = FV(rate, period - 1, payment, present, 0);
    }
  }

  // Return interest
  return interest * rate;
}

export default ipmt;
