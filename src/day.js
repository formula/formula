// Copyright 2015 WebsiteHQ LLC

import parsedate from './parsedate'

// DAY parses a date string and returns the day of the month.
export default function day(d) {
  return parsedate(d).getDate()
}
