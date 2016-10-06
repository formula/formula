'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cos;

var _isnumber = require('./isnumber');

var _isnumber2 = _interopRequireDefault(_isnumber);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// COS returns the cosine of a value.
// Copyright 2015 Peter W Moresi

function cos(value) {

  // Return `#VALUE!` when value is not a number.
  if (!(0, _isnumber2.default)(value)) {
    return _error2.default.value;
  }

  return Math.cos(value);
}
module.exports = exports['default'];