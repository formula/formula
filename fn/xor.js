'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = xor;

var _flatten = require('./flatten');

var _flatten2 = _interopRequireDefault(_flatten);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// XOR computes the exclusive or for a given set of `values`.
function xor() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return !!((0, _flatten2.default)(values).reduce(function (a, b) {
    if (b) {
      return a + 1;
    }
    return a;
  }, 0) & 1);
} // Copyright 2015 JC Fisher

module.exports = exports['default'];