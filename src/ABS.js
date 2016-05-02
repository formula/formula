// Copyright 2015 Peter W Moresi

import {ISNUMBER} from './ISNUMBER';
import error from './ERROR';

// ABS computes absolute value of a number
export function ABS(value) {

  // Return `#VALUE!` if not number
  if (!ISNUMBER(value)) {
    return error.value;
  }

  // Use built-in Math.abs
  return Math.abs(value);
}
