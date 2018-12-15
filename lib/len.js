"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = len;

var _error = require("./error");

// Copyright 2015-2018 FormBucket LLC
// LEN returns the size of a string or array.
function len(value) {
  if (arguments.length === 0) {
    return _error.ERRORTYPES.error;
  }

  if (typeof value === "string") {
    return value.length;
  }

  if (value.length) {
    return value.length;
  }

  return _error.ERRORTYPES.value;
}
