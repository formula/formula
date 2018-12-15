"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = n;

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _iserror = _interopRequireDefault(require("./iserror"));

var _serial = _interopRequireDefault(require("./serial"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// N converts a `value` to a number. It supports numbers, true, false and dates.
function n(value) {
  // Pass numbers and errors back out.
  if ((0, _isnumber.default)(value) || (0, _iserror.default)(value)) {
    return value;
  } // Convert dates to serial number.


  if (value instanceof Date) {
    return (0, _serial.default)(value);
  } // Convert true to 1


  if (value === true) {
    return 1;
  } // Convert false to 0


  if (value === false) {
    return 0;
  } // Return 0 in all other cases.


  return 0;
}
