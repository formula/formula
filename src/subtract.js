// Copyright 2015 WebsiteHQ LLC

import isnumber from './isnumber';
import error from './error'

// SUBTRACT calculates the difference of two numbers.
export default function subtract(...values) {

  // Return `#NA!` if 2 arguments are not provided.
  if (values.length !== 2) {
    return error.na;
  }

  // decompose values into a and b.
  var [a, b] = values

  // Return `#VALUE!` if either a or b is not a number.
  if (!isnumber(a) || !isnumber(b)) {
    return error.value
  }

  // Return the difference.
  return a - b
}
