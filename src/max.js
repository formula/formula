// Copyright 2015 Peter W Moresi

import {flatten} from './flatten';
import {isblank} from './isblank';
import {isnumber} from './isnumber';

// MAX returns the largest number from a `list`.
export function max(...list) {

  if (list.length === 0) return;

  return flatten( list ).reduce((max, next) => {
    if (isblank(max)) return next;
    else if (isnumber(next)) return Math.max(max, next);
    else return max;
  });
}
