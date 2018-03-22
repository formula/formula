// Copyright 2015 JC Fisher

import error from "./error";
import reduce from "./reduce";

// ISERROR returns true when any of the values is an error.
export default function iserror(...values) {
  return reduce(
    values,
    (p, v) => (p === true ? true : v instanceof Error),
    false
  );
}
