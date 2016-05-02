'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.N = N;

var _ISNUMBER = require('./ISNUMBER');

var _ISERROR = require('./ISERROR');

var _SERIAL = require('./SERIAL');

// N converts a `value` to a number. It supports numbers, true, false and dates.
function N(value) {

  // Pass numbers and errors back out.
  if ((0, _ISNUMBER.ISNUMBER)(value) || (0, _ISERROR.ISERROR)(value)) {
    return value;
  }

  // Convert dates to serial number.
  if (value instanceof Date) {
    return (0, _SERIAL.SERIAL)(value);
  }

  // Convert true to 1
  if (value === true) {
    return 1;
  }

  // Convert false to 0
  if (value === false) {
    return 0;
  }

  // Return 0 in all other cases.
  return 0;
} // Copyright 2015 Peter W Moresi