"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = istext;

// Copyright 2015-2018 FormBucket LLC
// ISTEXT returns true when the value is a string.
function istext(value) {
  return "string" === typeof value;
}
