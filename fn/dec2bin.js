'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = dec2bin;

var _rept = require('./rept');

var _rept2 = _interopRequireDefault(_rept);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _isnan = require('./isnan');

var _isnan2 = _interopRequireDefault(_isnan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// based on https://github.com/sutoiku/formula.js/blob/mast../src/engineering.js
function dec2bin(input, places) {

  // exit if input is an error
  if (input instanceof Error) {
    return number;
  }

  // cast input to number
  var number = parseInt(input);

  if (!/^-?[0-9]{1,3}$/.test(number) || (0, _isnan2.default)(number)) {
    return _error2.default.value;
  }

  // Return error.if number is not decimal, is lower than -512, or is greater than 511
  if (number < -512 || number > 511) {
    return _error2.default.num;
  }

  // Ignore places and return a 10-character binary number if number is negative
  if (number < 0) {
    return '1' + (0, _rept2.default)('0', 9 - (512 + number).toString(2).length) + (512 + number).toString(2);
  }

  // Convert decimal number to binary
  var result = parseInt(number, 10).toString(2);

  // Return binary number using the minimum number of characters necessary if places is undefined
  if (typeof places === 'undefined') {
    return result;
  } else {
    // Return error.if places is nonnumeric
    if (!/^-?[0-9]{1,3}$/.test(places) || (0, _isnan2.default)(places)) {
      return _error2.default.value;
    }

    // Return error.if places is negative
    if (places < 0) {
      return _error2.default.num;
    }

    // Truncate places in case it is not an integer
    places = Math.floor(places);

    // Pad return value with leading 0s (zeros) if necessary (using Underscore.string)
    return places >= result.length ? (0, _rept2.default)('0', places - result.length) + result : _error2.default.num;
  }
} // Copyright 2015 JC Fisher

module.exports = exports['default'];