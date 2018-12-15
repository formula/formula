"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = eomonth;

var _parsedate = _interopRequireDefault(require("./parsedate"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
function eomonth(start_date, months) {
  start_date = (0, _parsedate.default)(start_date);

  if (start_date instanceof Error) {
    return start_date;
  }

  if (isNaN(months)) {
    return _error.ERRORTYPES.value;
  }

  months = parseInt(months, 10);
  return new Date(start_date.getFullYear(), start_date.getMonth() + months + 1, 0);
}
