'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = changed;

var _unique = require('./unique');

var _unique2 = _interopRequireDefault(_unique);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CHANGED computes the list of keys that are different between two objects.
function changed(a, b) {

  // Compute the keys in object a and b.
  var keysA = Object.keys(a),
      keysB = Object.keys(b);

  // Find the unique set of properties comparing a to b and b to a.
  return (0, _unique2.default)(keysA.filter(function (n) {
    return a[n] !== b[n];
  }).concat(keysB.filter(function (n) {
    return a[n] !== b[n];
  })));
} // Copyright 2015 JC Fisher

module.exports = exports['default'];