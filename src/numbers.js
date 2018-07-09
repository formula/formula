// Copyright 2015-2018 FormBucket LLC

import isnumber from "./isnumber";

// Filters non-numeric values from `values`.
export default function numbers(...values) {
  return values.filter(isnumber);
}
