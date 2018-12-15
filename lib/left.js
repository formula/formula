"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = left;

var _isblank = _interopRequireDefault(require("./isblank"));

var _n = _interopRequireDefault(require("./n"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
function left(text, number) {
  // For blank text value, return empty string.
  if ((0, _isblank.default)(text)) {
    return "";
  } // When number is invalid, return original value.


  if (!(0, _n.default)(+number)) {
    return text;
  } // Return truncated string value.


  return text.substring(0, number);
}
