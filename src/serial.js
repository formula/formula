// Copyright 2015-2018 FormBucket LLC

import { d1900, MilliSecondsInDay } from "./constants";
import isdate from "./isdate";
import { ERRORTYPES as error } from "./error";

// SERIAL convert a date object into a serial number.
export default function serial(date) {
  // Credit: https://github.com/sutoiku/formula.js/
  if (!isdate(date)) {
    return error.na;
  }
  var diff = Math.ceil((date - d1900) / MilliSecondsInDay);
  return diff + (diff > 59 ? 2 : 1);
}
