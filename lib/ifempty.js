"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ifempty;

var _isempty = _interopRequireDefault(require("./isempty"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// IFBLANK return the `value` if empty, otherwise it returns `value_if_empty`.
function ifempty(value, value_if_empty) {
  return (0, _isempty.default)(value) ? value_if_empty : value;
}
