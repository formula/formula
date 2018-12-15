"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = iserror;

var _error = _interopRequireDefault(require("./error"));

var _reduce = _interopRequireDefault(require("./reduce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// ISERROR returns true when any of the values is an error.
function iserror() {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return (0, _reduce.default)(values, function (p, v) {
    return p === true ? true : v instanceof Error;
  }, false);
}
