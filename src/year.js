// Copyright 2015 WebsiteHQ LLC

import parsedate from './parsedate'

// YEAR parses a date value and returns the year of the year.
export default function year(d) {
  return parsedate(d).getFullYear()
}
