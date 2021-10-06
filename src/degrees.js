// Copyright 2015-2021 JC Fisher

import isnumber from "./isnumber";
import { ERRORTYPES as error } from "./error";

// Converts radians into degrees.
export default function degrees(radians) {
  // Ensure value is a radians
  if (!isnumber(radians)) {
    return error.value;
  }

  // Compute value
  return radians * 180 / Math.PI;
}
