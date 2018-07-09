// Copyright 2015-2018 FormBucket LLC

import isnumber from "./isnumber";
import { ERRORTYPES as error } from "./error";

// Compute the arccotangent of a given number.
export default function acoth(number) {
  // Ensure value is a number
  if (!isnumber(number)) {
    return error.value;
  }

  // Compute value
  return 0.5 * Math.log((number + 1) / (number - 1));
}
