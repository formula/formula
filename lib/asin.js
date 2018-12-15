"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = asin;

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Compute the inverse sin of a given number.
function asin(number) {
  // Ensure value is a number
  if (!(0, _isnumber.default)(number)) {
    return _error.ERRORTYPES.value;
  } // Compute result with built-in implementation.


  return Math.asin(number);
}
