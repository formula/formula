"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = average;

var _sum = _interopRequireDefault(require("./sum"));

var _iserror = _interopRequireDefault(require("./iserror"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// AVERAGE computes sum of items divided by number of items
function average() {
  // compute sum all of the items.
  var v = _sum.default.apply(void 0, arguments); // return sum when computed error.


  if ((0, _iserror.default)(v)) {
    return v;
  } // return sum divided by item count


  return v / arguments.length;
}
