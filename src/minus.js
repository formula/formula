// Copyright 2015 JC Fisher

import isnumber from "./isnumber";
import { ERRORTYPES as error } from "./error";
import numVal from "./numbervalue";

// ADD calculates the sum of two numbers.
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
