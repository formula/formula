'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATE = DATE;

var _SERIAL = require('./SERIAL');

function DATE(year, month, day) {
  return (0, _SERIAL.SERIAL)(new Date(year, month - 1, day));
}