// Copyright 2015-2018 FormBucket LLC

// ISEVEN returns true when the value is even.
export default function iseven(value) {
  return !(Math.floor(Math.abs(value)) & 1);
}
