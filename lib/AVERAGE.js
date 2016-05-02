'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AVERAGE = AVERAGE;

var _SUM = require('./SUM');

var _ISERROR = require('./ISERROR');

// AVERAGE computes sum of items divided by number of items
// Copyright 2015 Peter W Moresi

function AVERAGE() {
  for (var _len = arguments.length, items = Array(_len), _key = 0; _key < _len; _key++) {
    items[_key] = arguments[_key];
  }

  // compute sum all of the items.
  var sum = _SUM.SUM.apply(undefined, items);

  // return sum when computed error.
  if ((0, _ISERROR.ISERROR)(sum)) {
    return sum;
  }

  // return sum divided by item count
  return sum / items.length;
}