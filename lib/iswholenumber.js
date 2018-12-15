"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = iswholenumber;

var _isnumber = _interopRequireDefault(require("./isnumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Returns true when the value is a whole number
function iswholenumber(value) {
  return (0, _isnumber.default)(value) && value % 1 === 0;
}
