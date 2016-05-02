// Copyright 2015 Peter W Moresi

import {ISNUMBER} from './ISNUMBER';
import error from './ERROR';

// PMT returns a loan payment
export function PMT(rate, periods, present, future = 0, type = 0) {

  if (!ISNUMBER(rate) || !ISNUMBER(periods)) {
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
