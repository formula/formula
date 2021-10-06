// Copyright 2015-2021 JC Fisher

import isfunction from "./isfunction";
import reduce from "./reduce";

// Returns true when any of the criteria are true or 1, defaults to false.
export default function or(...criteria) {
  return reduce(
    criteria,
    (acc, item) => {
      // If accumulator is already true then it's still true.
      if (acc === true) return true;

      // Determine the value by resolving thunks if needed.
      let value = isfunction(item) ? item() : item;

      // Return true when value is true or 1.
      return value === true || value === 1;
    },
    false
  );
}
