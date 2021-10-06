// Copyright 2015-2021 JC Fisher

import { ERRORTYPES as error } from "./error";
import isblank from "./isblank";

export default function pv(rate, periods, payment, future = 0, type = 0) {
  // is this error code correct?
  if (isblank(rate)) return error.na;
  if (isblank(periods)) return error.na;
  if (isblank(payment)) return error.na;

  if (rate === 0) {
    return -payment * periods - future;
  } else {
    return (
      ((1 - Math.pow(1 + rate, periods)) / rate * payment * (1 + rate * type) -
        future) /
      Math.pow(1 + rate, periods)
    );
  }
}
