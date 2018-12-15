"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = acot;

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Compute the arccotangent of a given number.
function acot(number) {
  // Ensure value is a number
  if (!(0, _isnumber.default)(number)) {
    return _error.ERRORTYPES.value;
  } // Compute value


  return Math.atan(1 / number);
}
