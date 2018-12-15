"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = date;

var _serial = _interopRequireDefault(require("./serial"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// date returns a serial number given a year, month and day.
function date(year, month, day) {
  return (0, _serial.default)(new Date(year, month - 1, day));
}
