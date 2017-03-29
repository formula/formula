'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lower;

var _istext = require('./istext');

var _istext2 = _interopRequireDefault(_istext);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// LOWER converts `value` to lower case
// Copyright 2015 JC Fisher

function lower(value) {
  if (!(0, _istext2.default)(value)) return _error2.default.value;
  return value.toLowerCase();
}
module.exports = exports['default'];