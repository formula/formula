"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = acoth;

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Compute the arccotangent of a given number.
function acoth(number) {
  // Ensure value is a number
  if (!(0, _isnumber.default)(number)) {
    return _error.ERRORTYPES.value;
  } // Compute value


  return 0.5 * Math.log((number + 1) / (number - 1));
}
