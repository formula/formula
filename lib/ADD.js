'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ADD = ADD;

var _ISNUMBER = require('./ISNUMBER');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ADD calculates the sum of two numbers.
// Copyright 2015 Peter W Moresi

function ADD() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  // Return `#NA!` if 2 arguments are not provided.
  if (values.length !== 2) {
    return _ERROR2.default.na;
  }

  // decompose values into a and b.
  var a = values[0];
  var b = values[1];

  // Return `#VALUE!` if either a or b is not a number.

  if (!(0, _ISNUMBER.ISNUMBER)(a) || !(0, _ISNUMBER.ISNUMBER)(b)) {
    return _ERROR2.default.value;
  }

  // Return a + b.
  return a + b;
}