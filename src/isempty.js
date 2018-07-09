// Copyright 2015-2018 FormBucket LLC

import isblank from "./isblank";
import isarray from "./isarray";
import istext from "./istext";

// ISEMPTY returns true when the value is blank, is an empty array or when it
// is an empty string.
export default function isempty(value) {
  return (
    isblank(value) ||
    (isarray(value) && value.length === 0) ||
    (istext(value) && value === "")
  );
}
