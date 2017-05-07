'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = changed;

var _unique = require('./unique');

var _unique2 = _interopRequireDefault(_unique);

var _keys = require('./keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CHANGED computes the list of keys that are different between two objects.
// Copyright 2015 JC Fisher

function changed(a, b) {

  // Compute the keys in object a and b.
  var keysA = (0, _keys2.default)(a),
      keysB = (0, _keys2.default)(b);

  // Find the unique set of properties comparing a to b and b to a.
  return (0, _unique2.default)(keysA.filter(function (n) {
    return a[n] !== b[n];
  }).concat(keysB.filter(function (n) {
    return a[n] !== b[n];
  })));
}
module.exports = exports['default'];