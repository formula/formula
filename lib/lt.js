"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lt;

var _isarray = _interopRequireDefault(require("./isarray"));

var _isref = _interopRequireDefault(require("./isref"));

var _map = _interopRequireDefault(require("./map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// LT compares two values and returns true when a is less than b.
function lt(a, b) {
  if ((0, _isref.default)(a) && (0, _isref.default)(b)) {
    return error.na;
  } else if ((0, _isarray.default)(a) && (0, _isarray.default)(b)) {
    return error.na;
  } else if ((0, _isref.default)(a) || (0, _isarray.default)(a)) {
    return (0, _map.default)(a, function (d) {
      return d < b;
    });
  } else if ((0, _isref.default)(b) || (0, _isarray.default)(b)) {
    return (0, _map.default)(a, function (d) {
      return d < a;
    });
  } else {
    return a < b;
  }
}
