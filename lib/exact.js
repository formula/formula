"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exact;

var _error = require("./error");

// Copyright 2015-2018 FormBucket LLC
// Exact compares two values and only returns true if they meet strict equivalence.
function exact(a, b) {
  return a === b;
}
