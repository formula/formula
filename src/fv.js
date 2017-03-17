// Copyright 2015 JC Fisher

import error from './error'
import isblank from './isblank'

export default function fv(rate, periods, payment, value=0, type=0) {

  // is this error code correct?
  if (isblank(rate)) return error.na
  if (isblank(periods)) return error.na
  if (isblank(payment)) return error.na

  var fv;
  if (rate === 0) {
    fv = value + payment * periods;
  } else {
    var term = Math.pow(1 + rate, periods);
    if (type === 1) {
      fv = value * term + payment * (1 + rate) * (term - 1) / rate;
    } else {
      fv = value * term + payment * (term - 1) / rate;
    }
  }
  return -fv;
};
