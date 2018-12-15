"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nand;

var _not = _interopRequireDefault(require("./not"));

var _and = _interopRequireDefault(require("./and"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Returns the composition of NOT(AND(...))
function nand() {
  return (0, _not.default)(_and.default.apply(void 0, arguments));
}
