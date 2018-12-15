"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = round;

// Copyright 2015-2018 FormBucket LLC
// CONVERT a number to a fixed precision.
function round(number, precision) {
  return +number.toFixed(precision);
}
