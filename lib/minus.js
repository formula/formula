"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = minus;

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _error = require("./error");

var _numbervalue = _interopRequireDefault(require("./numbervalue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Invert a value.
function minus(value) {
  // type casting.
  var val = (0, _numbervalue.default)(value); // Return `#VALUE!` if either val is not a number.

  if (!(0, _isnumber.default)(val)) {
    return _error.ERRORTYPES.value;
  } // Return the number value.


  return -val;
}
