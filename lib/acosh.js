"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = acosh;

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Compute the hyperbolic inverse cosine of a value.
function acosh(value) {
  if (!(0, _isnumber.default)(value)) {
    return _error.ERRORTYPES.value;
  }

  return Math.log(value + Math.sqrt(value * value - 1));
}
