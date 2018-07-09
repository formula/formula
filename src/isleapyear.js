// Copyright 2015-2018 FormBucket LLC

import parsedate from "./parsedate";

export default function isleapyear(val) {
  var date = parsedate(val);
  var year = date.getFullYear();
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
