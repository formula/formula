// Copyright 2015 Peter W Moresi

import {flatten} from './flatten';
import {isnumber} from './isnumber';

// MAX returns the largest number from a `list`.
export function max(...list) {
  return flatten( list ).reduce((max, next) => {
    if (isnumber(next)) {
      return Math.max(max, next);
    }

    return max;

  }, Number.NEGATIVE_INFINITY );
}
