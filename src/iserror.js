// Copyright 2015-2018 FormBucket LLC

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
