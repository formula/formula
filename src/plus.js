// Copyright 2015-2021 JC Fisher

import isnumber from "./isnumber";
import { ERRORTYPES as error } from "./error";
import nv from "./numbervalue";

// Convert a value into a number.
export default function plus(value) {
  // type casting.
  let val = nv(value);

  // Return `#VALUE!` if either val is not a number.
  if (!isnumber(val)) {
    return error.value;
  }

  // Return the number value.
  return val;
}
