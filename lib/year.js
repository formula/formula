"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = year;

var _parsedate = _interopRequireDefault(require("./parsedate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// YEAR parses a date value and returns the year of the year.
function year(d) {
  return (0, _parsedate.default)(d).getFullYear();
}
