// Copyright 2015-2021 JC Fisher

// ISARRAY returns true when the value is an array.
export default function isarray(value) {
  return Object.prototype.toString.call(value) === "[object Array]";
}
