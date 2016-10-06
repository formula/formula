"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = concatenate;
// Copyright 2015 Peter W Moresi

// CONCATENATE reduces a list of values into a single string.
function concatenate() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  // Combine into a single string value
  return values.reduce(function (acc, item) {
    return "" + acc + item;
  });
}
module.exports = exports["default"];