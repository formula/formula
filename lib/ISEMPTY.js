'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISEMPTY = ISEMPTY;

var _ISBLANK = require('./ISBLANK');

var _ISARRAY = require('./ISARRAY');

var _ISTEXT = require('./ISTEXT');

// ISEMPTY returns true when the value is blank, is an empty array or when it
// is an empty string.
function ISEMPTY(value) {
  return (0, _ISBLANK.ISBLANK)(value) || (0, _ISARRAY.ISARRAY)(value) && value.length === 0 || (0, _ISTEXT.ISTEXT)(value) && value === '';
} // Copyright 2015 Peter W Moresi

;