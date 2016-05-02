'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MIN = MIN;

var _FLATTEN = require('./FLATTEN');

var _ISNUMBER = require('./ISNUMBER');

// MIN returns the smallest number from a `list`.
// Copyright 2015 Peter W Moresi

function MIN() {
  for (var _len = arguments.length, list = Array(_len), _key = 0; _key < _len; _key++) {
    list[_key] = arguments[_key];
  }

  return (0, _FLATTEN.FLATTEN)(list).reduce(function (min, next) {
    if ((0, _ISNUMBER.ISNUMBER)(next)) {
      return Math.min(min, next);
    }

    return min;
  }, Number.POSITIVE_INFINITY);
}