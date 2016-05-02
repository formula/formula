// Copyright 2015 Peter W Moresi

import {SERIAL} from './SERIAL';

// DATE returns a serial number given a year, month and day.
export function DATE(year, month, day) {
  return SERIAL(new Date(year, month-1, day));
}
