"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isempty;

var _isblank = _interopRequireDefault(require("./isblank"));

var _isarray = _interopRequireDefault(require("./isarray"));

var _istext = _interopRequireDefault(require("./istext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// ISEMPTY returns true when the value is blank, is an empty array or when it
// is an empty string.
function isempty(value) {
  return (0, _isblank.default)(value) || (0, _isarray.default)(value) && value.length === 0 || (0, _istext.default)(value) && value === "";
}
