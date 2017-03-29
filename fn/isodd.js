"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isodd;
// Copyright 2015 JC Fisher

// ISODD returns true when the value is odd.
function isodd(value) {
  return !!(Math.floor(Math.abs(value)) & 1);
}
module.exports = exports["default"];