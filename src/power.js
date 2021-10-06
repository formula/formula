// Copyright 2015-2021 JC Fisher

import isnumber from "./isnumber";
import { ERRORTYPES as error } from "./error";

// POWER computes the power of a value and nth degree.
export default function power(val, nth) {
  // Return `#NA!` if 2 arguments are not provided.
  if (arguments.length !== 2) {
    return error.na;
  }

  // Return `#VALUE!` if either a or b is not a number.
  if (!isnumber(val) || !isnumber(nth)) {
    return error.value;
  }

  // Compute the power of val to the nth.
  return Math.pow(val, nth);
}
