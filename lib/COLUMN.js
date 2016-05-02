'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.COLUMN = COLUMN;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

var _ISTEXT = require('./ISTEXT');

var _ISREF = require('./ISREF');

var _COLUMNNUMBER = require('./COLUMNNUMBER');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// COLUMN return the column number that corresponds to the reference.
// Copyright 2015 Peter W Moresi

function COLUMN(value) {

  // Return `#VALUE!` when the value is not a reference.
  if (!(0, _ISREF.ISREF)(value)) {
    return _ERROR2.default.value;
  }

  // Run the COLUMNNUMBER and convert to base 1.
  return (0, _COLUMNNUMBER.COLUMNNUMBER)(value.column) + 1;
}