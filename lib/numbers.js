"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = numbers;

var _isnumber = _interopRequireDefault(require("./isnumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Filters non-numeric values from `values`.
function numbers() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return values.filter(_isnumber.default);
}
