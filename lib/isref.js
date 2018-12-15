"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isref;

var _isblank = _interopRequireDefault(require("./isblank"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// ISREF returns true when the value is a reference.
function isref(value) {
  if (!value) return false;
  return value._isref === true;
}
