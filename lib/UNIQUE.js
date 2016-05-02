"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UNIQUE = UNIQUE;
// Copyright 2015 Peter W Moresi

// UNIQUE reduces an `array` into an array without duplicate values.
function UNIQUE(array) {
  return array.reduce(function (p, c) {
    if (p.indexOf(c) < 0) p.push(c);
    return p;
  }, []);
}