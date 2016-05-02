// Copyright 2015 Peter W Moresi

import {ISNUMBER} from './ISNUMBER';
import error from './ERROR';

// SIN calculates the sinine of a value.
export function SIN(value) {

  if (!ISNUMBER(value)) {
    return error.value;
  }

  return Math.sin(value);

}
