// Copyright 2015-2021 JC Fisher

import isnumber from "./isnumber";

// Filters non-numeric values from `values`.
export default function numbers(...values) {
  return values.filter(isnumber);
}
