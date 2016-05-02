'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ABS = ABS;

var _ISNUMBER = require('./ISNUMBER');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ABS computes absolute value of a number
// Copyright 2015 Peter W Moresi

function ABS(value) {

  // Return `#VALUE!` if not number
  if (!(0, _ISNUMBER.ISNUMBER)(value)) {
    return _ERROR2.default.value;
  }

  // Use built-in Math.abs
  return Math.abs(value);
}