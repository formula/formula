'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = month;

var _parsedate = require('./parsedate');

var _parsedate2 = _interopRequireDefault(_parsedate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// MONTH parses a date value and returns the month of the year.
function month(d) {
  return (0, _parsedate2.default)(d).getMonth() + 1;
} // Copyright 2015 Peter W Moresi

module.exports = exports['default'];