// Copyright 2015 WebsiteHQ LLC

import isnumber from './isnumber';
import error from './error';

// PMT returns a loan payment
export default function pmt(rate, periods, present, future = 0, type = 0) {

  if (!isnumber(rate) || !isnumber(periods)) {
    return error.value;
  }

  if (rate === 0) {
    return -((present + future) / periods);
  } else {
    var term = Math.pow(1 + rate, periods);
    if (type === 1) {
      return -((future * rate / (term - 1) + present * rate / (1 - 1 / term)) / (1 + rate));
    } else {
      return -(future * rate / (term - 1) + present * rate / (1 - 1 / term));
    }
  }

};
