'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DEC2BIN = DEC2BIN;

var _REPT = require('./REPT');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// based on https://github.com/sutoiku/formula.js/blob/mast../src/engineering.js
// Copyright 2015 Peter W Moresi

function DEC2BIN(input, places) {

  // exit if input is an error
  if (input instanceof Error) {
    return number;
  }

  // cast input to number
  var number = parseInt(input);

  if (Number.isNaN(number)) {
    return _ERROR2.default.value;
  }

  // Return error.if number is not decimal, is lower than -512, or is greater than 511
  if (!/^-?[0-9]{1,3}$/.test(number) || number < -512 || number > 511) {
    return _ERROR2.default.num;
  }

  // Ignore places and return a 10-character binary number if number is negative
  if (number < 0) {
    return '1' + (0, _REPT.REPT)('0', 9 - (512 + number).toString(2).length) + (512 + number).toString(2);
  }

  // Convert decimal number to binary
  var result = parseInt(number, 10).toString(2);

  // Return binary number using the minimum number of characters necessary if places is undefined
  if (typeof places === 'undefined') {
    return result;
  } else {
    // Return error.if places is nonnumeric
    if (isNaN(places)) {
      return _ERROR2.default.value;
    }

    // Return error.if places is negative
    if (places < 0) {
      return _ERROR2.default.num;
    }

    // Truncate places in case it is not an integer
    places = Math.floor(places);

    // Pad return value with leading 0s (zeros) if necessary (using Underscore.string)
    return places >= result.length ? (0, _REPT.REPT)('0', places - result.length) + result : _ERROR2.default.num;
  }
}