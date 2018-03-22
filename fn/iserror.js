"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = iserror;

var _error = require("./error");

var _error2 = _interopRequireDefault(_error);

var _reduce = require("./reduce");

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ISERROR returns true when any of the values is an error.
// Copyright 2015 JC Fisher

function iserror() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return (0, _reduce2.default)(values, function (p, v) {
    return p === true ? true : v instanceof Error;
  }, false);
}
module.exports = exports["default"];