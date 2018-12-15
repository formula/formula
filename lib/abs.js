"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = abs;

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// ABS computes absolute value of a number
function abs(value) {
  // Return `#VALUE!` if not number
  if (!(0, _isnumber.default)(value)) {
    return _error.ERRORTYPES.value;
  } // Use built-in Math.abs


  return Math.abs(value);
}
