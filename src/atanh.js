// Copyright 2015-2021 JC Fisher

import isnumber from "./isnumber";
import { ERRORTYPES as error } from "./error";

// Compute the inverse arctangent (in radians) of the given number
export default function atan(x) {
  // Ensure value is a number
  if (!isnumber(x)) {
    return error.value;
  }

  // Compute value
  return Math.log((1 + x) / (1 - x)) / 2;
}
