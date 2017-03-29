"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unique;
// Copyright 2015 JC Fisher

// UNIQUE reduces an `array` into an array without duplicate values.
function unique(array) {
  return array.reduce(function (p, c) {
    if (p.indexOf(c) < 0) p.push(c);
    return p;
  }, []);
}
module.exports = exports["default"];