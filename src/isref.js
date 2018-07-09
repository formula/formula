// Copyright 2015-2018 FormBucket LLC

import isblank from "./isblank";

// ISREF returns true when the value is a reference.
export default function isref(value) {
  if (!value) return false;
  return value._isref === true;
}
