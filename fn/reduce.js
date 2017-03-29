"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduce;
// Copyright 2015 JC Fisher

// reduce an array to a value
function reduce(arr, f) {
  return arr.reduce(function (p, v) {
    return f(p, v);
  });
}
module.exports = exports["default"];