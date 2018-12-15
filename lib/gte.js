"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gte;

var _isarray = _interopRequireDefault(require("./isarray"));

var _isref = _interopRequireDefault(require("./isref"));

var _map = _interopRequireDefault(require("./map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
function gte(a, b) {
  if ((0, _isref.default)(a) && (0, _isref.default)(b)) {
    return error.na;
  } else if ((0, _isarray.default)(a) && (0, _isarray.default)(b)) {
    return error.na;
  } else if ((0, _isref.default)(a) || (0, _isarray.default)(a)) {
    return (0, _map.default)(a, function (d) {
      return d >= b;
    });
  } else if ((0, _isref.default)(b) || (0, _isarray.default)(b)) {
    return (0, _map.default)(a, function (d) {
      return d >= a;
    });
  } else {
    return a >= b;
  }
}
