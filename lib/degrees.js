"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = degrees;

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Converts radians into degrees.
function degrees(radians) {
  // Ensure value is a radians
  if (!(0, _isnumber.default)(radians)) {
    return _error.ERRORTYPES.value;
  } // Compute value


  return radians * 180 / Math.PI;
}
