'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SIN = SIN;

var _ISNUMBER = require('./ISNUMBER');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// SIN calculates the sinine of a value.
// Copyright 2015 Peter W Moresi

function SIN(value) {

  if (!(0, _ISNUMBER.ISNUMBER)(value)) {
    return _ERROR2.default.value;
  }

  return Math.sin(value);
}