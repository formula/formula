'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COS = COS;

var _ISNUMBER = require('./ISNUMBER');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// COS returns the cosine of a value.
// Copyright 2015 Peter W Moresi

function COS(value) {

  // Return `#VALUE!` when value is not a number.
  if (!(0, _ISNUMBER.ISNUMBER)(value)) {
    return _ERROR2.default.value;
  }

  return Math.cos(value);
}