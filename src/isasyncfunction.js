// Copyright 2015-2021 JC Fisher

// ISFUNCTION returns true when `value` is a function.
export default function isasyncfunction(value) {
  return (
    value && Object.prototype.toString.call(value) == "[object AsyncFunction]"
  );
}
