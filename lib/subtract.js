"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = subtract;

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// SUBTRACT calculates the difference of two numbers.
function subtract(a, b) {
  // Return `#NA!` if 2 arguments are not provided.
  if (arguments.length !== 2) {
    return _error.ERRORTYPES.na;
  } // Return `#VALUE!` if either a or b is not a number.


  if (!(0, _isnumber.default)(a) || !(0, _isnumber.default)(b)) {
    return _error.ERRORTYPES.value;
  } // Return the difference.


  return a - b;
}
