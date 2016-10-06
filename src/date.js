// Copyright 2015 Peter W Moresi

import serial from './serial';

// DATE returns a serial number given a year, month and day.
export default function date(year, month, day) {
  return serial(new Date(year, month-1, day));
}
