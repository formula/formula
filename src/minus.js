// Copyright 2015-2018 FormBucket LLC

import isnumber from "./isnumber";
import { ERRORTYPES as error } from "./error";
import numVal from "./numbervalue";

// Invert a value.
export default function minus(value) {
  // type casting.
  let val = numVal(value);

  // Return `#VALUE!` if either val is not a number.
  if (!isnumber(val)) {
    return error.value;
  }

  // Return the number value.
  return -val;
}
