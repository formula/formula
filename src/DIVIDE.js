// Copyright 2015 Peter W Moresi

import {ISNUMBER} from './ISNUMBER';
import error from './ERROR'

// DIVIDE calculates the product of two numbers.
export function DIVIDE(...values) {

  // Return `#NA!` if 2 arguments are not provided.
  if (values.length !== 2) {
    return error.na;
  }

  // decompose values into a and b.
  var [a, b] = values

  // You cannot divide a number by 0.
  if (b === 0) {
    return error.div0
  }

  // Return `#VALUE!` if either a or b is not a number.
  if (!ISNUMBER(a) || !ISNUMBER(b)) {
    return error.value
  }

  // Return the product
  return a / b
}
