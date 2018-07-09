// Copyright 2015-2018 FormBucket LLC

import isnumber from "./isnumber";
import { ERRORTYPES as error } from "./error";

// COS returns the cosine of a value.
export default function cos(value) {
  // Return `#VALUE!` when value is not a number.
  if (!isnumber(value)) {
    return error.value;
  }

  return Math.cos(value);
}
