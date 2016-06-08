// Copyright 2015 Peter W Moresi

import {flatten} from './flatten';
import {isnumber} from './isnumber';

// MIN returns the smallest number from a `list`.
export function min(...list) {
  return flatten( list ).reduce((min, next) => {
    if (isnumber(next)) {
      return Math.min(min, next);
    }

    return min;

  }, Number.POSITIVE_INFINITY );
}
