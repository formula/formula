"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AND = AND;
// Logical AND reduction
//
// Author: Peter Moresi
//
// Any list of criteria can be flattened out to a truthy value.
function AND() {
  for (var _len = arguments.length, criteria = Array(_len), _key = 0; _key < _len; _key++) {
    criteria[_key] = arguments[_key];
  }

  return criteria.reduce(function (previousValue, currentValue) {
    if (previousValue === false) return false;
    return currentValue;
  }, true);
}