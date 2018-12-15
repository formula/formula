"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eq;

// Copyright 2015-2018 FormBucket LLC
// EQ compares two values and returns a boolean value.
function eq(a, b) {
  if (typeof a === "string" && typeof b === "string") {
    // String comparisions are case-insensitive when both are string values.
    return a.toLowerCase() === b.toLowerCase();
  } else {
    // Strict equivalence as the default when non-string values are present.
    return a === b;
  }
}
