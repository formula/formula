// Copyright 2015 JC Fisher

import isnumber from './isnumber';
import { ERRORTYPES as error } from './error';

// ABS computes absolute value of a number
export default function abs(value) {

  // Return `#VALUE!` if not number
  if (!isnumber(value)) {
    return error.value;
  }

  // Use built-in Math.abs
  return Math.abs(value);
}
