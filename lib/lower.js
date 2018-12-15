"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lower;

var _istext = _interopRequireDefault(require("./istext"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// LOWER converts `value` to lower case
function lower(value) {
  if (!(0, _istext.default)(value)) return _error.ERRORTYPES.value;
  return value.toLowerCase();
}
