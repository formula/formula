// Copyright 2015-2021 JC Fisher

import iserror from "./iserror";
import { ERRORTYPES as error } from "./error";
import isfunction from "./isfunction";
import reduce from "./reduce";

// AND reduces list of truthy values into true or false value.
export default function and(...criteria) {
  // Reduce criteria into boolean value.
  return reduce(
    criteria,
    (acc, item) => {
      // Once an error, always an error.
      if (iserror(acc)) return acc;

      // Once `false` or #error! is found always return previously value.
      if (acc === 0 || acc === false) return false;

      // find the value if a literal or deferred value.
      let val = isfunction(item) ? item() : item;

      // return `#VALUE!` if not true, false, 1 or 0.
      if (!(val === true || val === false || val === 1 || val === 0)) {
        return error.value;
      }

      // Return true when value is true or 1.
      return val === true || val === 1;
    },
    undefined
  );
}
