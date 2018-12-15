"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = base;

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _error = require("./error");

var _numbervalue = _interopRequireDefault(require("./numbervalue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Return a number into a text representation with the given radix
function base(number, radix) {
  var min_length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  number = (0, _numbervalue.default)(number);
  radix = (0, _numbervalue.default)(radix);
  min_length = (0, _numbervalue.default)(min_length); // if (fn.isAnyError(number, radix, min_length)) {
  //   return error.value;
  // }

  min_length = min_length === undefined ? 0 : min_length;
  var result = number.toString(radix);
  return new Array(Math.max(min_length + 1 - result.length, 0)).join("0") + result;
}
