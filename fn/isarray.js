'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isarray;
// Copyright 2015 JC Fisher

// ISARRAY returns true when the value is an aray.
function isarray(value) {
  return Object.prototype.toString.call(value) === '[object Array]';
}
module.exports = exports['default'];