// Copyright 2015-2018 FormBucket LLC

import parsedate from "./parsedate";
import { MilliSecondsInDay } from "./constants";

export default function isoweeknum(date) {
  date = parsedate(date);

  if (date instanceof Error) {
    return date;
  }

  date.setHours(0, 0, 0);
  date.setDate(date.getDate() + 4 - (date.getDay() || 7));
  var yearStart = new Date(date.getFullYear(), 0, 1);
  return Math.ceil(((date - yearStart) / MilliSecondsInDay + 1) / 7);
}
