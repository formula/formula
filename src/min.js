// Copyright 2015 Peter W Moresi

import {flatten} from './flatten';
import {isblank} from './isblank';
import {isnumber} from './isnumber';

// MIN returns the smallest number from a `list`.
export function min(...list) {

  var values = flatten( list )
  if (values.length === 0) return;
  return values.reduce((min, next) => {
    if (isblank(min)) return next;
    else if (isnumber(next)) return Math.min(min, next);
    else return min;
  });
}
