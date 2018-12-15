"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = atan2;

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Return the arctangent (in radians) of the given number
function atan2(x, y) {
  // Ensure value is a number
  if (!(0, _isnumber.default)(x) || !(0, _isnumber.default)(y)) {
    return _error.ERRORTYPES.value;
  } // Compute value


  return Math.atan2(x, y);
}
