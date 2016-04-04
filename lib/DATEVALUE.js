'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATEVALUE = DATEVALUE;

var _PARSEDATE = require('./PARSEDATE');

var _SERIAL = require('./SERIAL');

function DATEVALUE(d) {
  return (0, _SERIAL.SERIAL)((0, _PARSEDATE.PARSEDATE)(d));
}