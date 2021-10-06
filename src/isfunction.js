// Copyright 2015-2021 JC Fisher
import isasync from "./isasyncfunction";

// ISFUNCTION returns true when `value` is a function.
export default function isfunction(value) {
  return (
    (value && Object.prototype.toString.call(value) == "[object Function]") ||
    isasync(value)
  );
}
