// Copyright 2015-2018 FormBucket LLC

import parsedate from "./parsedate";

// MONTH parses a date value and returns the month of the year.
export default function month(date) {
  return parsedate(date).getMonth() + 1;
}
