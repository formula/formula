// Copyright 2015-2018 FormBucket LLC

import flatten from "./flatten";
import isblank from "./isblank";
import isnumber from "./isnumber";
import reduce from "./reduce";

// MIN returns the smallest number from a `list`.
export default function min(...list) {
  var values = flatten(list);
  if (values.length === 0) return;
  return reduce(values, (min, next) => {
    if (isblank(min)) return next;
    else if (isnumber(next)) return Math.min(min, next);
    else return min;
  });
}
