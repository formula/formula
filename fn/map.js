"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = map;
// Copyright 2015 JC Fisher

// map an array to a new array
function map(arr, f) {
  return arr.map(function (d) {
    return f(d);
  });
}
module.exports = exports["default"];