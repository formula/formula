"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OR = OR;
// Logical OR operation

function OR() {
  for (var _len = arguments.length, criteria = Array(_len), _key = 0; _key < _len; _key++) {
    criteria[_key] = arguments[_key];
  }

  return criteria.reduce(function (a, b) {
    if (a === true) return true;
    return b;
  }, false);
}