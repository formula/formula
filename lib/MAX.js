'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MAX = MAX;

var _FLATTEN = require('./FLATTEN');

var _ISNUMBER = require('./ISNUMBER');

function MAX() {
  for (var _len = arguments.length, list = Array(_len), _key = 0; _key < _len; _key++) {
    list[_key] = arguments[_key];
  }

  return (0, _FLATTEN.FLATTEN)(list).reduce(function (max, next) {
    if ((0, _ISNUMBER.ISNUMBER)(next)) {
      console.log(max, next);
      return Math.max(max, next);
    }

    return max;
  }, Number.NEGATIVE_INFINITY);
}