"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isobject;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// Copyright 2015-2018 FormBucket LLC
// isobject returns true when `value` is an object or function.
function isobject(value) {
  var type = _typeof(value);

  return !!value && (type == "object" || type == "function");
}
