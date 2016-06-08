// Copyright 2015 Peter W Moresi

import {isnumber} from './isnumber';
import error from './error';

// SIN calculates the sinine of a value.
export function sin(value) {

  if (!isnumber(value)) {
    return error.value;
  }

  return Math.sin(value);

}
