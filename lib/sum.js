"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sum;

var _flatten = _interopRequireDefault(require("./flatten"));

var _error = require("./error");

var _reduce = _interopRequireDefault(require("./reduce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// SUM a given list of `numbers`
function sum() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return (0, _reduce.default)((0, _flatten.default)((0, _flatten.default)(numbers)), function (a, b) {
    if (typeof b !== "number") {
      return _error.ERRORTYPES.value;
    }

    return a + b;
  });
}
