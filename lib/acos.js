"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = acos;

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// ACOS computes the inverse cosine of a number
function acos(value) {
  // Return `#VALUE!` if not number
  if (!(0, _isnumber.default)(value)) {
    return _error.ERRORTYPES.value;
  } // Use built-in Math.acos


  return Math.acos(value);
}
