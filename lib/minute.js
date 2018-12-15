"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = minute;

var _constants = require("./constants");

var _isdate = _interopRequireDefault(require("./isdate"));

var _trunc = _interopRequireDefault(require("./trunc"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
function minute(value) {
  if ((0, _isdate.default)(value)) {
    return value.getMinutes();
  } // calculate total seconds


  var totalSeconds = (value - (0, _trunc.default)(value)) * _constants.SecondsInDay; // calculate number of seconds for hour components


  var hourSeconds = (0, _trunc.default)(totalSeconds / _constants.SecondsInHour) * _constants.SecondsInHour; // calculate the number seconds after remove seconds from the hours and convert to minutes


  return (0, _trunc.default)((totalSeconds - hourSeconds) / _constants.SecondsInMinute);
}
