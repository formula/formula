"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = serial;

var _constants = require("./constants");

var _isdate = _interopRequireDefault(require("./isdate"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// SERIAL convert a date object into a serial number.
function serial(date) {
  // Credit: https://github.com/sutoiku/formula.js/
  if (!(0, _isdate.default)(date)) {
    return _error.ERRORTYPES.na;
  }

  var diff = Math.ceil((date - _constants.d1900) / _constants.MilliSecondsInDay);
  return diff + (diff > 59 ? 2 : 1);
}
