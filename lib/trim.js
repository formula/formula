"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = trim;

var _error = require("./error");

// Copyright 2015-2018 FormBucket LLC
// TRIMS returns a string without whitespace at the beginning or end.
function trim(text) {
  if (typeof text !== "string") {
    return _error.ERRORTYPES.value;
  }

  return text.trim();
}
