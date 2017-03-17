// Copyright 2015 JC Fisher

import parsedate from './parsedate'
import serial from './serial'

// DATEVALUE parses a date string and returns a serial number.
export default function datevalue(d) {
  return serial(parsedate(d));
}
