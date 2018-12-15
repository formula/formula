"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = power;

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// POWER computes the power of a value and nth degree.
function power(val, nth) {
  // Return `#NA!` if 2 arguments are not provided.
  if (arguments.length !== 2) {
    return _error.ERRORTYPES.na;
  } // Return `#VALUE!` if either a or b is not a number.


  if (!(0, _isnumber.default)(val) || !(0, _isnumber.default)(nth)) {
    return _error.ERRORTYPES.value;
  } // Compute the power of val to the nth.


  return Math.pow(val, nth);
}
