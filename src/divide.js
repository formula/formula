// Copyright 2015-2018 FormBucket LLC

import isnumber from "./isnumber";
import { ERRORTYPES as error } from "./error";

// DIVIDE calculates the product of two numbers.
export default function divide(a, b) {
  // Return `#NA!` if 2 arguments are not provided.
  if (arguments.length !== 2) {
    return error.na;
  }

  // You cannot divide a number by 0.
  if (b === 0) {
    return error.div0;
  }

  // Return `#VALUE!` if either a or b is not a number.
  if (!isnumber(a) || !isnumber(b)) {
    return error.value;
  }

  // Return the product
  return a / b;
}
