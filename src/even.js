// Copyright 2015-2018 FormBucket LLC

import ceiling from "./ceiling";

// Returns number rounded up to the nearest even integer.
export default function even(number) {
  // TBD: error cases
  return ceiling(number, -2, -1);
}
