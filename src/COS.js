// Copyright 2015 Peter W Moresi

import {ISNUMBER} from './ISNUMBER';
import error from './ERROR';

// COS returns the cosine of a value.
export function COS(value) {

  // Return `#VALUE!` when value is not a number.
  if (!ISNUMBER(value)) {
    return error.value;
  }

  return Math.cos(value);

}
