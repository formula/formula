'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = acos;

var _isnumber = require('./isnumber');

var _isnumber2 = _interopRequireDefault(_isnumber);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ACOS computes the inverse cosine of a number
// Copyright 2015 Peter W Moresi

function acos(value) {

  // Return `#VALUE!` if not number
  if (!(0, _isnumber2.default)(value)) {
    return _error2.default.value;
  }

  // Use built-in Math.acos
  return Math.acos(value);
}
module.exports = exports['default'];