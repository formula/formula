"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isasyncfunction;

// Copyright 2015-2018 FormBucket LLC
// ISFUNCTION returns true when `value` is a function.
function isasyncfunction(value) {
  return value && Object.prototype.toString.call(value) == "[object AsyncFunction]";
}
