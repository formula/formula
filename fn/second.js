'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = second;

var _constants = require('./constants');

var _trunc = require('./trunc');

var _trunc2 = _interopRequireDefault(_trunc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015 JC Fisher

function second(value) {

  // calculate total seconds
  var totalSeconds = (value - (0, _trunc2.default)(value)) * _constants.SecondsInDay;

  // calculate number of seconds for hour component
  var hourSeconds = (0, _trunc2.default)(totalSeconds / _constants.SecondsInHour) * _constants.SecondsInHour;

  // calculate number of seconds in minute component
  var minuteSeconds = (0, _trunc2.default)((totalSeconds - hourSeconds) / _constants.SecondsInMinute) * _constants.SecondsInMinute;

  // remove seconds for hours and minutes and round to nearest value
  return Math.round(totalSeconds - hourSeconds - minuteSeconds);
}
module.exports = exports['default'];