"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cos;

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// COS returns the cosine of a value.
function cos(value) {
  // Return `#VALUE!` when value is not a number.
  if (!(0, _isnumber.default)(value)) {
    return _error.ERRORTYPES.value;
  }

  return Math.cos(value);
}
