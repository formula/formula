// Copyright 2015-2018 FormBucket LLC

import { ERRORTYPES as error } from "./error";

// Exact compares two values and only returns true if they meet strict equivalence.
export default function exact(a, b) {
  return a === b;
}
