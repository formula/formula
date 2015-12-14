'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COND = COND;
// COND.js -
// SYNTAX( condition1, result_if_true [, condition2, result_if_true] )

function COND() {
  for (var _len = arguments.length, cases = Array(_len), _key = 0; _key < _len; _key++) {
    cases[_key] = arguments[_key];
  }

  return cases.reduce(function (a, b, i) {

    if (typeof a !== 'undefined') {
      // return the previously found item
      return a;
    } else if (i === cases.length - 1) {

      if (i % 2 === 1) {
        return; // nothing found
      }

      // return the last item
      return b;
    } else if (i % 2 === 0 && b) {
      // return the found item
      return cases[i + 1];
    }
  }, undefined);
}