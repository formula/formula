// Copyright 2015 Peter W Moresi

import {ISNUMBER} from './ISNUMBER';
import error from './ERROR'

// MULTIPLY calculates the product of two numbers.
export function MULTIPLY(...values) {

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

  // Return the product
  return a * b
}
