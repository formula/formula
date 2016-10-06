// Copyright 2015 Peter W Moresi

import isnumber from './isnumber';
import error from './error'

// DIVIDE calculates the product of two numbers.
export default function divide(...values) {

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
  if (!isnumber(a) || !isnumber(b)) {
    return error.value
  }

  // Return the product
  return a / b
}
