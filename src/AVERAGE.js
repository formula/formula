// Copyright 2015 Peter W Moresi

import {SUM} from './SUM';
import {ISERROR} from './ISERROR';

// AVERAGE computes sum of items divided by number of items
export function AVERAGE(...items) {

  // compute sum all of the items.
  var sum = SUM(...items)

  // return sum when computed error.
  if (ISERROR(sum)) {
    return sum;
  }

  // return sum divided by item count
  return  sum / items.length;
}
