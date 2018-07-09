// Copyright 2015-2018 FormBucket LLC

import isnumber from "./isnumber";
import { ERRORTYPES as error } from "./error";
import numbervalue from "./numbervalue";
import round from "./round";

// Returns number rounded up, away from zero, to the nearest multiple of significance.
export default function ceiling(number, significance, mode) {
  significance = significance === undefined ? 1 : Math.abs(significance);
  mode = mode || 0;

  number = numbervalue(number);
  significance = numbervalue(significance);
  mode = numbervalue(mode);

  // if (utils.isAnyError(number, significance, mode)) {
  //   return error.value;
  // }

  if (significance === 0) {
    return 0;
  }

  var precision = -Math.floor(Math.log(significance) / Math.log(10));

  if (number >= 0) {
    return round(Math.ceil(number / significance) * significance, precision);
  } else {
    if (mode === 0) {
      return -round(
        Math.floor(Math.abs(number) / significance) * significance,
        precision
      );
    } else {
      return -round(
        Math.ceil(Math.abs(number) / significance) * significance,
        precision
      );
    }
  }
}
