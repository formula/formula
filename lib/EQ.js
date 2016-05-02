"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EQ = EQ;
// Copyright 2015 Peter W Moresi

// EQ compares two values and returns a boolean value.
function EQ(a, b) {
  // String comparisions are case-insensitive
  if (typeof a === "string" && typeof b === "string") {
    return a.toLowerCase() === b.toLowerCase();
  } else {
    return a === b;
  }
}