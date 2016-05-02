// Copyright 2015 Peter W Moresi

import {PARSEDATE} from './PARSEDATE'
import {SERIAL} from './SERIAL'

// DATEVALUE parses a date string and returns a serial number.
export function DATEVALUE(d) {
  return SERIAL(PARSEDATE(d));
}
