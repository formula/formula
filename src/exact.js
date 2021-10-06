// Copyright 2015-2021 JC Fisher

import { ERRORTYPES as error } from "./error";

// Exact compares two values and only returns true if they meet strict equivalence.
export default function exact(a, b) {
  return a === b;
}
