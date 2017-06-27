'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = right;

var _isblank = require('./isblank');

var _isblank2 = _interopRequireDefault(_isblank);

var _n = require('./n');

var _n2 = _interopRequireDefault(_n);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// RIGHT pulls a given number of character from the right side of `text`.
function right(text, number) {

  // For blank text value, return empty string.  
  if ((0, _isblank2.default)(text)) {
    return '';
  }

  // When number is invalid, return original value.
  if (!(0, _n2.default)(+number)) {
    return text;
  }
  // Return truncated string value.
  return text.substring(text.length - number);
} // Copyright 2015 JC Fisher

module.exports = exports['default'];