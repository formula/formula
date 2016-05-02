"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROUND = ROUND;
// Copyright 2015 Peter W Moresi

// CONVERT a number to a fixed precision.
function ROUND(number, precision) {
  return +number.toFixed(precision);
}