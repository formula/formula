'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = column;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _istext = require('./istext');

var _istext2 = _interopRequireDefault(_istext);

var _isref = require('./isref');

var _isref2 = _interopRequireDefault(_isref);

var _columnnumber = require('./columnnumber');

var _columnnumber2 = _interopRequireDefault(_columnnumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// COLUMN return the column number that corresponds to the reference.
// Copyright 2015 Peter W Moresi

function column(value) {

  // Return `#VALUE!` when the value is not a reference.
  if (!(0, _isref2.default)(value)) {
    return _error2.default.value;
  }

  // Run the COLUMNNUMBER and convert to base 1.
  return (0, _columnnumber2.default)(value.column) + 1;
}
module.exports = exports['default'];