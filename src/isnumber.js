// Copyright 2015-2018 FormBucket LLC

// Returns true when the value is a finite number.
export default function isnumber(value) {
  return typeof value === "number" && !isNaN(value) && isFinite(value);
}
