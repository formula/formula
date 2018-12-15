"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = month;

var _parsedate = _interopRequireDefault(require("./parsedate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// MONTH parses a date value and returns the month of the year.
function month(date) {
  return (0, _parsedate.default)(date).getMonth() + 1;
}
