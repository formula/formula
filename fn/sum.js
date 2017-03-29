'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sum;

var _flatten = require('./flatten');

var _flatten2 = _interopRequireDefault(_flatten);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// SUM a given list of `numbers`
// Copyright 2015 JC Fisher

function sum() {
  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return (0, _flatten2.default)((0, _flatten2.default)(numbers)).reduce(function (a, b) {
    if (typeof b !== 'number') {
      return _error2.default.value;
    }
    return a + b;
  });
}
module.exports = exports['default'];