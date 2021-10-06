// Copyright 2015-2021 JC Fisher

import isnumber from "./isnumber";
import { ERRORTYPES as error } from "./error";

// MOD returns the remainder of a / b.
export default function mod(a, b) {
  if (!isnumber(a) || !isnumber(b)) return error.value;
  return a % b;
}
