// Copyright 2015-2018 FormBucket LLC

import parsedate from "./parsedate";

// YEAR parses a date value and returns the year of the year.
export default function year(d) {
  return parsedate(d).getFullYear();
}
