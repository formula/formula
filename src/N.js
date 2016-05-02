// Copyright 2015 Peter W Moresi

import {ISNUMBER} from './ISNUMBER';
import {ISERROR} from './ISERROR';
import {SERIAL} from './SERIAL';

// N converts a `value` to a number. It supports numbers, true, false and dates.
export function N(value) {

  // Pass numbers and errors back out.
  if (ISNUMBER(value) || ISERROR(value)) {
    return value;
  }

  // Convert dates to serial number.
  if (value instanceof Date) {
    return SERIAL(value);
  }

  // Convert true to 1
  if (value === true) {
    return 1;
  }

  // Convert false to 0
  if (value === false) {
    return 0;
  }

  // Return 0 in all other cases.
  return 0;

}
