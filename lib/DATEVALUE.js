'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DATEVALUE = DATEVALUE;

var _PARSEDATE = require('./PARSEDATE');

var _SERIAL = require('./SERIAL');

// DATEVALUE parses a date string and returns a serial number.
// Copyright 2015 Peter W Moresi

function DATEVALUE(d) {
  return (0, _SERIAL.SERIAL)((0, _PARSEDATE.PARSEDATE)(d));
}