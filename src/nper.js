// Copyright 2015-2021 JC Fisher
import isNaN from "./isnan";

export default function nper(rate, pmt, pv, fv, type) {
  var log, result;
  rate = parseFloat(rate || 0);
  pmt = parseFloat(pmt || 0);
  pv = parseFloat(pv || 0);
  fv = fv || 0;
  type = type || 0;

  log = function(prim) {
    if (isNaN(prim)) {
      return Math.log(0);
    }
    var num = Math.log(prim);
    return num;
  };

  if (rate == 0.0) {
    result = -(pv + fv) / pmt;
  } else if (type > 0.0) {
    result =
      log(
        -(rate * fv - pmt * (1.0 + rate)) / (rate * pv + pmt * (1.0 + rate))
      ) / log(1.0 + rate);
  } else {
    result = log(-(rate * fv - pmt) / (rate * pv + pmt)) / log(1.0 + rate);
  }

  if (isNaN(result)) {
    result = 0;
  }

  return result;
}
