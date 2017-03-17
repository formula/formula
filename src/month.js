// Copyright 2015 JC Fisher

import parsedate from './parsedate'

// MONTH parses a date value and returns the month of the year.
export default function month(d) {
  return parsedate(d).getMonth() + 1
}
