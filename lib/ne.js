"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ne;

var _eq = _interopRequireDefault(require("./eq"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// NE returns true when a is not equal to b.
function ne(a, b) {
  return !(0, _eq.default)(a, b);
}
