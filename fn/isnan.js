'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isnan;
// Copyright 2015 JC Fisher

// ISNA returns true when the value is `#NA!`
function isnan(value) {
  if (Number.isNaN) return Number.isNaN(value);
  return typeof value === 'number' && isNaN(value);
}
module.exports = exports['default'];