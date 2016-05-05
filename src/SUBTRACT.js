// Copyright 2015 Peter W Moresi

import {ISNUMBER} from './ISNUMBER';
import error from './ERROR'

// SUBTRACT calculates the difference of two numbers.
export function SUBTRACT(...values) {

  // Return `#NA!` if 2 arguments are not provided.
  if (values.length !== 2) {
    return error.na;
  }

  // decompose values into a and b.
  var [a, b] = values

  // Return `#VALUE!` if either a or b is not a number.
  if (!ISNUMBER(a) || !ISNUMBER(b)) {
    return error.value
  }

  // Return the difference.
  return a - b
}
