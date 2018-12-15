"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = divide;

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// DIVIDE calculates the product of two numbers.
function divide(a, b) {
  // Return `#NA!` if 2 arguments are not provided.
  if (arguments.length !== 2) {
    return _error.ERRORTYPES.na;
  } // You cannot divide a number by 0.


  if (b === 0) {
    return _error.ERRORTYPES.div0;
  } // Return `#VALUE!` if either a or b is not a number.


  if (!(0, _isnumber.default)(a) || !(0, _isnumber.default)(b)) {
    return _error.ERRORTYPES.value;
  } // Return the product


  return a / b;
}
