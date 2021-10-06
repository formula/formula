// Copyright 2015-2021 JC Fisher

import parsedate from "./parsedate";

// MONTH parses a date value and returns the month of the year.
export default function month(date) {
  return parsedate(date).getMonth() + 1;
}
