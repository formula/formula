// Copyright 2015-2021 JC Fisher

import isnumber from "./isnumber";
import { ERRORTYPES as error } from "./error";

// SUBTRACT calculates the difference of two numbers.
export default function subtract(a, b) {
  // Return `#NA!` if 2 arguments are not provided.
  if (arguments.length !== 2) {
    return error.na;
  }

  // Return `#VALUE!` if either a or b is not a number.
  if (!isnumber(a) || !isnumber(b)) {
    return error.value;
  }

  // Return the difference.
  return a - b;
}
