'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LTE = LTE;

var _RANGE = require('./RANGE');

var _ISARRAY = require('./ISARRAY');

var _ISRANGE = require('./ISRANGE');

function LTE(a, b) {
  if ((0, _ISRANGE.ISRANGE)(a) && (0, _ISRANGE.ISRANGE)(b)) {
    return error.na;
  } else if ((0, _ISARRAY.ISARRAY)(a) && (0, _ISARRAY.ISARRAY)(b)) {
    return error.na;
  } else if ((0, _ISRANGE.ISRANGE)(a) || (0, _ISARRAY.ISARRAY)(a)) {
    return a.map(function (d) {
      return d <= b;
    });
  } else if ((0, _ISRANGE.ISRANGE)(b) || (0, _ISARRAY.ISARRAY)(b)) {
    return b.map(function (d) {
      return d <= a;
    });
  } else {
    return a <= b;
  }
}