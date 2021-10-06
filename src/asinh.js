// Copyright 2015-2021 JC Fisher

import isnumber from "./isnumber";
import { ERRORTYPES as error } from "./error";

// Compute the inverse hyperbolic sin of a given number.
export default function asinh(number) {
  // Ensure value is a number
  if (!isnumber(number)) {
    return error.value;
  }

  // Compute value
  return Math.log(number + Math.sqrt(number * number + 1));
}
