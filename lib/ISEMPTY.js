'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISEMPTY = ISEMPTY;

var _ISBLANK = require('./ISBLANK');

var _ISARRAY = require('./ISARRAY');

var _ISTEXT = require('./ISTEXT');

function ISEMPTY(value) {
  return (0, _ISBLANK.ISBLANK)(value) || (0, _ISARRAY.ISARRAY)(value) && value.length === 0 || (0, _ISTEXT.ISTEXT)(value) && value === '';
};