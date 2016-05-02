// Copyright 2015 Peter W Moresi

import {ISNUMBER} from './ISNUMBER';
import error from './ERROR';

// TAN computes the tagent of a value.
export function TAN(value) {

  if (!ISNUMBER(value)) {
    return error.value;
  }

  return Math.tan(value);

}
