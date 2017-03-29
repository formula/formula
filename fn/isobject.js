'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isobject;
// Copyright 2015 JC Fisher

// isobject returns true when `value` is an object or function.
function isobject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return !!value && (type == 'object' || type == 'function');
};
module.exports = exports['default'];