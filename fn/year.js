'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = year;

var _parsedate = require('./parsedate');

var _parsedate2 = _interopRequireDefault(_parsedate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// YEAR parses a date value and returns the year of the year.
function year(d) {
  return (0, _parsedate2.default)(d).getFullYear();
} // Copyright 2015 JC Fisher

module.exports = exports['default'];