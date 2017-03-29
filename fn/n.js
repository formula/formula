'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = n;

var _isnumber = require('./isnumber');

var _isnumber2 = _interopRequireDefault(_isnumber);

var _iserror = require('./iserror');

var _iserror2 = _interopRequireDefault(_iserror);

var _serial = require('./serial');

var _serial2 = _interopRequireDefault(_serial);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// N converts a `value` to a number. It supports numbers, true, false and dates.
function n(value) {

  // Pass numbers and errors back out.
  if ((0, _isnumber2.default)(value) || (0, _iserror2.default)(value)) {
    return value;
  }

  // Convert dates to serial number.
  if (value instanceof Date) {
    return (0, _serial2.default)(value);
  }

  // Convert true to 1
  if (value === true) {
    return 1;
  }

  // Convert false to 0
  if (value === false) {
    return 0;
  }

  // Return 0 in all other cases.
  return 0;
} // Copyright 2015 JC Fisher

module.exports = exports['default'];