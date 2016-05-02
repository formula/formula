'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISREF = ISREF;

var _ISBLANK = require('./ISBLANK');

// ISREF returns true when the value is a reference.
function ISREF(value) {
  if (!value) return false;
  return value.isRef === true;
} // Copyright 2015 Peter W Moresi