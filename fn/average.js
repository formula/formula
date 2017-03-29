'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = average;

var _sum = require('./sum');

var _sum2 = _interopRequireDefault(_sum);

var _iserror = require('./iserror');

var _iserror2 = _interopRequireDefault(_iserror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// AVERAGE computes sum of items divided by number of items
// Copyright 2015 JC Fisher

function average() {

  // compute sum all of the items.
  var v = _sum2.default.apply(undefined, arguments);

  // return sum when computed error.
  if ((0, _iserror2.default)(v)) {
    return v;
  }

  // return sum divided by item count
  return v / arguments.length;
}
module.exports = exports['default'];