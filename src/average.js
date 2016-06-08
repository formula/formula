// Copyright 2015 Peter W Moresi

import {sum} from './sum';
import {iserror} from './iserror';

// AVERAGE computes sum of items divided by number of items
export function average(...items) {

  // compute sum all of the items.
  var sum = sum(...items)

  // return sum when computed error.
  if (iserror(sum)) {
    return sum;
  }

  // return sum divided by item count
  return  sum / items.length;
}
