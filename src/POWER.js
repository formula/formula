// Copyright 2015 Peter W Moresi

import {ISNUMBER} from './ISNUMBER';
import error from './ERROR'

// POWER computes the power of a value and nth degree.
export function POWER(...values) {

  // Return `#NA!` if 2 arguments are not provided.
  if (values.length !== 2) {
    return error.na;
  }

  // decompose values into a and b.
  var [val, nth] = values

  // Return `#VALUE!` if either a or b is not a number.
  if (!ISNUMBER(val) || !ISNUMBER(nth)) {
    return error.value
  }

  // Compute the power of val to the nth.
  return Math.pow(val, nth);
}
