// Copyright 2015 Peter W Moresi

import {d1900, MilliSecondsInDay} from './CONSTANTS'
import {ISDATE} from './ISDATE'
import error from './ERROR';

// SERIAL convert a date object into a serial number.
export function SERIAL(date) {
  // Credit: https://github.com/sutoiku/formula.js/
  if (!ISDATE(date)) { return error.na }
  var diff = Math.ceil((date - d1900) / MilliSecondsInDay)
  return diff + ( diff > 59 ? 2 : 1)
}
