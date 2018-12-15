"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sin;

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// SIN calculates the sinine of a value.
function sin(value) {
  if (!(0, _isnumber.default)(value)) {
    return _error.ERRORTYPES.value;
  }

  return Math.sin(value);
}
