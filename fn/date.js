'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = date;

var _serial = require('./serial');

var _serial2 = _interopRequireDefault(_serial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// date returns a serial number given a year, month and day.
function date(year, month, day) {
  return (0, _serial2.default)(new Date(year, month - 1, day));
} // Copyright 2015 JC Fisher

module.exports = exports['default'];