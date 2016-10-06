'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = minute;

var _constants = require('./constants');

var _trunc = require('./trunc');

var _trunc2 = _interopRequireDefault(_trunc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function minute(value) {
  // calculate total seconds
  var totalSeconds = (value - (0, _trunc2.default)(value)) * _constants.SecondsInDay;
  // calculate number of seconds for hour components
  var hourSeconds = (0, _trunc2.default)(totalSeconds / _constants.SecondsInHour) * _constants.SecondsInHour;
  // calculate the number seconds after remove seconds from the hours and convert to minutes
  return (0, _trunc2.default)((totalSeconds - hourSeconds) / _constants.SecondsInMinute);
}
module.exports = exports['default'];