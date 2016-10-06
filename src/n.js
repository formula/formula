// Copyright 2015 Peter W Moresi

import isnumber from './isnumber';
import iserror from './iserror';
import serial from './serial';

// N converts a `value` to a number. It supports numbers, true, false and dates.
export default function n(value) {

  // Pass numbers and errors back out.
  if (isnumber(value) || iserror(value)) {
    return value;
  }

  // Convert dates to serial number.
  if (value instanceof Date) {
    return serial(value);
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
