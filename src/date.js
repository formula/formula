// Copyright 2015 Peter W Moresi

import {serial} from './serial';

// DATE returns a serial number given a year, month and day.
export function date(year, month, day) {
  return serial(new date(year, month-1, day));
}
