"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = max;

var _reduce = _interopRequireDefault(require("./reduce"));

var _flatten = _interopRequireDefault(require("./flatten"));

var _isblank = _interopRequireDefault(require("./isblank"));

var _isnumber = _interopRequireDefault(require("./isnumber"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// MAX returns the largest number from a `list`.
function max() {
  for (var _len = arguments.length, list = new Array(_len), _key = 0; _key < _len; _key++) {
    list[_key] = arguments[_key];
  }

  var values = (0, _flatten.default)(list);
  if (values.length === 0) return;
  return (0, _reduce.default)(values, function (max, next) {
    if ((0, _isblank.default)(max)) return next;else if ((0, _isnumber.default)(next)) return Math.max(max, next);else return max;
  });
}
