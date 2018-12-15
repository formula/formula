"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = day;

var _parsedate = _interopRequireDefault(require("./parsedate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// DAY parses a date string and returns the day of the month.
function day(d) {
  return (0, _parsedate.default)(d).getDate();
}
