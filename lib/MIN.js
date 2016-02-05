'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MIN = MIN;

var _FLATTEN = require('./FLATTEN');

function MIN() {
  (0, _FLATTEN.FLATTEN)(arguments).reduce(function (max, next) {
    if (typeof next !== 'number' || next !== next) {
      return max;
    }

    return Math.min(max, next);
  }, undefined);
}