"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = edate;

var _parsedate = _interopRequireDefault(require("./parsedate"));

var _serial = _interopRequireDefault(require("./serial"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
function edate(start_date, months) {
  start_date = (0, _parsedate.default)(start_date);

  if (start_date instanceof Error) {
    return start_date;
  }

  if (isNaN(months)) {
    return error.value;
  }

  months = parseInt(months, 10);
  start_date.setMonth(start_date.getMonth() + months);
  return (0, _serial.default)(start_date);
}
