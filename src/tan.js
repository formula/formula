// Copyright 2015 Peter W Moresi

import {isnumber} from './isnumber';
import error from './error';

// TAN computes the tagent of a value.
export function tan(value) {

  if (!isnumber(value)) {
    return error.value;
  }

  return Math.tan(value);

}
