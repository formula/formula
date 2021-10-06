// Copyright 2015-2021 JC Fisher

import isnumber from "./isnumber";
import { ERRORTYPES as error } from "./error";

// Compute the hyperbolic inverse cosine of a value.
export default function acosh(value) {
  if (!isnumber(value)) {
    return error.value;
  }

  return Math.log(value + Math.sqrt(value * value - 1));
}
