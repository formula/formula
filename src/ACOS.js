// Copyright 2015 Peter W Moresi

import {ISNUMBER} from './ISNUMBER';
import error from './ERROR';

// ACOS computes the inverse cosine of a number
export function ACOS(value) {

  // Return `#VALUE!` if not number
  if (!ISNUMBER(value)) {
    return error.value;
  }

  // Use built-in Math.acos
  return Math.acos(value);

}
