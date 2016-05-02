"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OR = OR;
// Copyright 2015 Peter W Moresi

// OR returns true when any of the criter is true or 1.
function OR() {
  for (var _len = arguments.length, criteria = Array(_len), _key = 0; _key < _len; _key++) {
    criteria[_key] = arguments[_key];
  }

  return criteria.reduce(function (acc, item) {
    if (acc === true) return true;
    return item === true || item === 1;
  }, false);
}