"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isdate;

// Copyright 2015-2018 FormBucket LLC
// ISDATE returns true when the `value` is a JavaScript date object.
function isdate(value) {
  return value && Object.prototype.toString.call(value) == "[object Date]";
}
