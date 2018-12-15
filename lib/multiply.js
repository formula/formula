"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = multiply;

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// MULTIPLY calculates the product of two numbers.
function multiply(a, b) {
  // Return `#NA!` if 2 arguments are not provided.
  if (arguments.length !== 2) {
    return _error.ERRORTYPES.na;
  } // Return `#VALUE!` if either a or b is not a number.


  if (!(0, _isnumber.default)(a) || !(0, _isnumber.default)(b)) {
    return _error.ERRORTYPES.value;
  } // Return the product


  return a * b;
}
