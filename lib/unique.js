"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unique;

var _reduce = _interopRequireDefault(require("./reduce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// UNIQUE reduces an `array` into an array without duplicate values.
function unique(array) {
  return (0, _reduce.default)(array, function (p, c) {
    if (p.indexOf(c) < 0) p.push(c);
    return p;
  }, []);
}
