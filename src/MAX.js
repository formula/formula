// Copyright 2015 Peter W Moresi

import {FLATTEN} from './FLATTEN';
import {ISNUMBER} from './ISNUMBER';

// MAX returns the largest number from a `list`.
export function MAX(...list) {
  return FLATTEN( list ).reduce((max, next) => {
    if (ISNUMBER(next)) {
      return Math.max(max, next);
    }

    return max;

  }, Number.NEGATIVE_INFINITY );
}
