"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;
// Copyright 2015 JC Fisher

// reduce an array to a value
function reduce(arr, func) {
  for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    rest[_key - 2] = arguments[_key];
  }

  return arr.reduce.apply(arr, [func].concat(rest));
}
module.exports = exports["default"];