'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CLEAN = CLEAN;

var _ISBLANK = require('./ISBLANK');

var _SELECT = require('./SELECT');

// CLEAN accepts an object and remove properties that are blank.
// Copyright 2015 Peter W Moresi

function CLEAN(obj) {
  // Compute keys where value is non blank.
  var keys = Object.keys(obj).filter(function (n) {
    return !(0, _ISBLANK.ISBLANK)(obj[n]);
  });

  // Compute object with only non-blank keys.
  return (0, _SELECT.SELECT)(keys, obj);
}