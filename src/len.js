// Copyright 2015-2018 FormBucket LLC

import { ERRORTYPES as error } from "./error";

// LEN returns the size of a string or array.
export default function len(value) {
  if (arguments.length === 0) {
    return error.error;
  }

  if (typeof value === "string") {
    return value.length;
  }

  if (value.length !== undefined) {
    return value.length;
  }

  return error.value;
}
