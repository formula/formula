// Copyright 2015 Peter W Moresi

import {isnumber} from './isnumber';
import error from './error';

// ACOS computes the inverse cosine of a number
export function acos(value) {

  // Return `#VALUE!` if not number
  if (!isnumber(value)) {
    return error.value;
  }

  // Use built-in Math.acos
  return Math.acos(value);

}
