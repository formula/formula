// Copyright 2015-2018 FormBucket LLC

import isnumber from "./isnumber";
import { ERRORTYPES as error } from "./error";

// MOD returns the remainder of a / b.
export default function mod(a, b) {
  if (!isnumber(a) || !isnumber(b)) return error.value;
  return a % b;
}
