'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isempty;

var _isblank = require('./isblank');

var _isblank2 = _interopRequireDefault(_isblank);

var _isarray = require('./isarray');

var _isarray2 = _interopRequireDefault(_isarray);

var _istext = require('./istext');

var _istext2 = _interopRequireDefault(_istext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ISEMPTY returns true when the value is blank, is an empty array or when it
// is an empty string.
function isempty(value) {
  return (0, _isblank2.default)(value) || (0, _isarray2.default)(value) && value.length === 0 || (0, _istext2.default)(value) && value === '';
} // Copyright 2015 JC Fisher

;
module.exports = exports['default'];