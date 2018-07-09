// Copyright 2015-2018 FormBucket LLC

import isnumber from "./isnumber";
import { ERRORTYPES as error } from "./error";
import numbervalue from "./numbervalue";

// Return a number into a text representation with the given radix
export default function base(number, radix, min_length = 0) {
  number = numbervalue(number);
  radix = numbervalue(radix);
  min_length = numbervalue(min_length);

  // if (fn.isAnyError(number, radix, min_length)) {
  //   return error.value;
  // }

  min_length = min_length === undefined ? 0 : min_length;
  var result = number.toString(radix);
  return (
    new Array(Math.max(min_length + 1 - result.length, 0)).join("0") + result
  );
}
