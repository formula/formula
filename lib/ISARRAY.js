'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISARRAY = ISARRAY;
// Copyright 2015 Peter W Moresi

// ISARRAY returns true when the value is an aray.
function ISARRAY(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
}