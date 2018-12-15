"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = even;

var _ceiling = _interopRequireDefault(require("./ceiling"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// Returns number rounded up to the nearest even integer.
function even(number) {
  // TBD: error cases
  return (0, _ceiling.default)(number, -2, -1);
}
