"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isarray;

// Copyright 2015-2018 FormBucket LLC
// ISARRAY returns true when the value is an array.
function isarray(value) {
  return Object.prototype.toString.call(value) === "[object Array]";
}
