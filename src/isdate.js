// Copyright 2015-2021 JC Fisher

// ISDATE returns true when the `value` is a JavaScript date object.
export default function isdate(value) {
  return value && Object.prototype.toString.call(value) == "[object Date]";
}
