'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.N = N;

var _ISNUMBER = require('./ISNUMBER');

var _ISERROR = require('./ISERROR');

var _SERIAL = require('./SERIAL');

function N(value) {
  if ((0, _ISNUMBER.ISNUMBER)(value)) {
    return value;
  }
  if (value instanceof Date) {
    return (0, _SERIAL.SERIAL)(value);
  }
  if (value === true) {
    return 1;
  }
  if (value === false) {
    return 0;
  }
  if ((0, _ISERROR.ISERROR)(value)) {
    return value;
  }
  return 0;
}