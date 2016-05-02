"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONCATENATE = CONCATENATE;
// Copyright 2015 Peter W Moresi

// CONCATENATE reduces a list of values into a single string.
function CONCATENATE() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  // Combine into a single string value
  return values.reduce(function (acc, item) {
    return "" + acc + item;
  });
}