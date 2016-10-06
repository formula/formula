'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = datevalue;

var _parsedate = require('./parsedate');

var _parsedate2 = _interopRequireDefault(_parsedate);

var _serial = require('./serial');

var _serial2 = _interopRequireDefault(_serial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// DATEVALUE parses a date string and returns a serial number.
// Copyright 2015 Peter W Moresi

function datevalue(d) {
  return (0, _serial2.default)((0, _parsedate2.default)(d));
}
module.exports = exports['default'];