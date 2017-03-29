'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = serial;

var _constants = require('./constants');

var _isdate = require('./isdate');

var _isdate2 = _interopRequireDefault(_isdate);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// SERIAL convert a date object into a serial number.
function serial(date) {
  // Credit: https://github.com/sutoiku/formula.js/
  if (!(0, _isdate2.default)(date)) {
    return _error2.default.na;
  }
  var diff = Math.ceil((date - _constants.d1900) / _constants.MilliSecondsInDay);
  return diff + (diff > 59 ? 2 : 1);
} // Copyright 2015 JC Fisher

module.exports = exports['default'];