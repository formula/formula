"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = xor;

var _reduce = _interopRequireDefault(require("./reduce"));

var _flatten = _interopRequireDefault(require("./flatten"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// XOR computes the exclusive or for a given set of `values`.
function xor() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return !!((0, _reduce.default)((0, _flatten.default)(values), function (a, b) {
    if (b) {
      return a + 1;
    }

    return a;
  }, 0) & 1);
}
