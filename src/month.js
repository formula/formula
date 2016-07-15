// Copyright 2015 Peter W Moresi

import {parsedate} from './parsedate'

// MONTH parses a date value and returns the month of the year.
export function month(d) {
  return parsedate(d).getMonth() + 1
}
