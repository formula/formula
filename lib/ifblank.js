"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ifblank;

var _isblank = _interopRequireDefault(require("./isblank"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// IFBLANK return the `value` if non-blank, otherwise it returns `value_if_blank`.
function ifblank(value, value_if_blank) {
  return (0, _isblank.default)(value) ? value_if_blank : value;
}
