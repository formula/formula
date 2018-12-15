"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = istruthy;

var _isfalsy = _interopRequireDefault(require("./isfalsy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Returns true when the value is not falsey
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
function istruthy(value) {
  return !(0, _isfalsy.default)(value);
}
