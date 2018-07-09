// Copyright 2015-2018 FormBucket LLC

import { ERRORTYPES as error } from "./error";
import isNaN from "./isnan";

// ISERR returns true when the value is an error (except `#NA!`) or when then
// value is a number which is NaN or [-]Infinity.
export default function iserr(value) {
  return (
    (value &&
      value !== error.na &&
      value.constructor &&
      value.constructor.name === "Error") ||
    (typeof value === "number" && (isNaN(value) || !isFinite(value)))
  );
}
