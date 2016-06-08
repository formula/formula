// Copyright 2015 Peter W Moresi

import {isnumber} from './isnumber';
import error from './error'

// POWER computes the power of a value and nth degree.
export function power(...values) {

  // Return `#NA!` if 2 arguments are not provided.
  if (values.length !== 2) {
    return error.na;
  }

  // decompose values into a and b.
  var [val, nth] = values

  // Return `#VALUE!` if either a or b is not a number.
  if (!isnumber(val) || !isnumber(nth)) {
    return error.value
  }

  // Compute the power of val to the nth.
  return Math.pow(val, nth);
}
