// Copyright 2015 Peter W Moresi

import {parsedate} from './parsedate'

// DAY parses a date string and returns the day of the month.
export function day(d) {
  return parsedate(d).getDate()
}
