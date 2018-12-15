"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isoweeknum;

var _parsedate = _interopRequireDefault(require("./parsedate"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
function isoweeknum(date) {
  date = (0, _parsedate.default)(date);

  if (date instanceof Error) {
    return date;
  }

  date.setHours(0, 0, 0);
  date.setDate(date.getDate() + 4 - (date.getDay() || 7));
  var yearStart = new Date(date.getFullYear(), 0, 1);
  return Math.ceil(((date - yearStart) / _constants.MilliSecondsInDay + 1) / 7);
}
