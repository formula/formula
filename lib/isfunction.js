"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isfunction;

var _isasyncfunction = _interopRequireDefault(require("./isasyncfunction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// ISFUNCTION returns true when `value` is a function.
function isfunction(value) {
  return value && Object.prototype.toString.call(value) == "[object Function]" || (0, _isasyncfunction.default)(value);
}
