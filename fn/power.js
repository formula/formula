'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = power;

var _isnumber = require('./isnumber');

var _isnumber2 = _interopRequireDefault(_isnumber);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// POWER computes the power of a value and nth degree.
// Copyright 2015 Peter W Moresi

function power() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  // Return `#NA!` if 2 arguments are not provided.
  if (values.length !== 2) {
    return _error2.default.na;
  }

  // decompose values into a and b.
  var val = values[0];
  var nth = values[1];

  // Return `#VALUE!` if either a or b is not a number.

  if (!(0, _isnumber2.default)(val) || !(0, _isnumber2.default)(nth)) {
    return _error2.default.value;
  }

  // Compute the power of val to the nth.
  return Math.pow(val, nth);
}
module.exports = exports['default'];