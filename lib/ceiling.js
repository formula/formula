"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ceiling;

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _error = require("./error");

var _numbervalue = _interopRequireDefault(require("./numbervalue"));

var _round = _interopRequireDefault(require("./round"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Returns number rounded up, away from zero, to the nearest multiple of significance.
function ceiling(number, significance, mode) {
  significance = significance === undefined ? 1 : Math.abs(significance);
  mode = mode || 0;
  number = (0, _numbervalue.default)(number);
  significance = (0, _numbervalue.default)(significance);
  mode = (0, _numbervalue.default)(mode); // if (utils.isAnyError(number, significance, mode)) {
  //   return error.value;
  // }

  if (significance === 0) {
    return 0;
  }

  var precision = -Math.floor(Math.log(significance) / Math.log(10));

  if (number >= 0) {
    return (0, _round.default)(Math.ceil(number / significance) * significance, precision);
  } else {
    if (mode === 0) {
      return -(0, _round.default)(Math.floor(Math.abs(number) / significance) * significance, precision);
    } else {
      return -(0, _round.default)(Math.ceil(Math.abs(number) / significance) * significance, precision);
    }
  }
}
