"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flatten;
// Copyright 2015 JC Fisher

// FLATTEN converts a nested array into a flattened array. It only supports one
// level of nesting.
function flatten(ref) {
  return ref.reduce(function (a, b) {
    return a.concat(b);
  }, []);
}
module.exports = exports["default"];