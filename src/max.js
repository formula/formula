// Copyright 2015 Peter W Moresi

import flatten from './flatten';
import isblank from './isblank';
import isnumber from './isnumber';

// MAX returns the largest number from a `list`.
export default function max(...list) {

  var values = flatten( list )
  if (values.length === 0) return;
  return values.reduce((max, next) => {
    if (isblank(max)) return next;
    else if (isnumber(next)) return Math.max(max, next);
    else return max;
  });
}
