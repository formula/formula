"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;

var _error = _interopRequireDefault(require("./error"));

var _assign = _interopRequireDefault(require("./assign"));

var _map = _interopRequireDefault(require("./map"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// merge two array of arrays
function merge(setA, setB, fieldOrIndex) {
  if (setA.length !== setB.length) {
    return _error.default;
  }

  var mode = typeof fieldOrIndex === "string" ? "field" : "index",
      startIndex = mode === "field" ? 1 : 0;
  return (0, _map.default)(setA, function (item, index) {
    return (0, _assign.default)({}, item, setB[index]);
  });
}
