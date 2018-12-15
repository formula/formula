"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = min;

var _flatten = _interopRequireDefault(require("./flatten"));

var _isblank = _interopRequireDefault(require("./isblank"));

var _isnumber = _interopRequireDefault(require("./isnumber"));

var _reduce = _interopRequireDefault(require("./reduce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// MIN returns the smallest number from a `list`.
function min() {
  for (var _len = arguments.length, list = new Array(_len), _key = 0; _key < _len; _key++) {
    list[_key] = arguments[_key];
  }

  var values = (0, _flatten.default)(list);
  if (values.length === 0) return;
  return (0, _reduce.default)(values, function (min, next) {
    if ((0, _isblank.default)(min)) return next;else if ((0, _isnumber.default)(next)) return Math.min(min, next);else return min;
  });
}
