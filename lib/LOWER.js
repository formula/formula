'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOWER = LOWER;

var _ISTEXT = require('./ISTEXT');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// LOWER converts `value` to lower case
// Copyright 2015 Peter W Moresi

function LOWER(value) {
  if (!(0, _ISTEXT.ISTEXT)(value)) return _ERROR2.default.value;
  return str.toLowerCase();
}