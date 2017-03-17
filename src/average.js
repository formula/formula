// Copyright 2015 JC Fisher

import sum from './sum';
import iserror from './iserror';

// AVERAGE computes sum of items divided by number of items
export default function average(...items) {

  // compute sum all of the items.
  var v = sum(...items)

  // return sum when computed error.
  if (iserror(v)) {
    return v;
  }

  // return sum divided by item count
  return  v / items.length;
}
