"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eq;
// Copyright 2015 Peter W Moresi

// EQ compares two values and returns a boolean value.
function eq(a, b) {
  // String comparisions are case-insensitive
  if (typeof a === "string" && typeof b === "string") {
    return a.toLowerCase() === b.toLowerCase();
  } else {
    return a === b;
  }
}
module.exports = exports["default"];