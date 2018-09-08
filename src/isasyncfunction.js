// Copyright 2015-2018 FormBucket LLC

// ISFUNCTION returns true when `value` is a function.
export default function isasyncfunction(value) {
  return (
    value && Object.prototype.toString.call(value) == "[object AsyncFunction]"
  );
}
