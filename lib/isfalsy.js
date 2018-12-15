"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isfalsy;

var _isnan = _interopRequireDefault(require("./isnan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Returns true when the value is a falsy value.
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
function isfalsy(value) {
  return value === false || value === 0 || value === "" || typeof value === "undefined" || value === null || (0, _isnan.default)(value);
}
