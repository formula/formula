// Copyright 2015-2018 FormBucket LLC

// ISARRAY returns true when the value is an array.
export default function isarray(value) {
  return Object.prototype.toString.call(value) === "[object Array]";
}
