'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = day;

var _parsedate = require('./parsedate');

var _parsedate2 = _interopRequireDefault(_parsedate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// DAY parses a date string and returns the day of the month.
function day(d) {
  return (0, _parsedate2.default)(d).getDate();
} // Copyright 2015 Peter W Moresi

module.exports = exports['default'];