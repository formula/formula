'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = surroundKeys;
// Creates a new object where all of the keys are surrounded by
// start and end delimiters.
function surroundKeys(obj) {
  var start = arguments.length <= 1 || arguments[1] === undefined ? '-' : arguments[1];
  var end = arguments[2];

  end = end || start;
  return Object.keys(obj).reduce(function (p, v) {
    p['' + start + v + end] = obj[v];
    return p;
  }, {});
}
module.exports = exports['default'];