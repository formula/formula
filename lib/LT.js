'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LT = LT;

var _ISARRAY = require('./ISARRAY');

var _ISREF = require('./ISREF');

// LT compares two values and returns true when a is less than b.
// Copyright 2015 Peter W Moresi

function LT(a, b) {
  if ((0, _ISREF.ISREF)(a) && (0, _ISREF.ISREF)(b)) {
    return error.na;
  } else if ((0, _ISARRAY.ISARRAY)(a) && (0, _ISARRAY.ISARRAY)(b)) {
    return error.na;
  } else if ((0, _ISREF.ISREF)(a) || (0, _ISARRAY.ISARRAY)(a)) {
    return a.map(function (d) {
      return d < b;
    });
  } else if ((0, _ISREF.ISREF)(b) || (0, _ISARRAY.ISARRAY)(b)) {
    return b.map(function (d) {
      return d < a;
    });
  } else {
    return a < b;
  }
}