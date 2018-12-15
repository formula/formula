"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = datevalue;

var _parsedate = _interopRequireDefault(require("./parsedate"));

var _serial = _interopRequireDefault(require("./serial"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// DATEVALUE parses a date string and returns a serial number.
function datevalue(d) {
  return (0, _serial.default)((0, _parsedate.default)(d));
}
