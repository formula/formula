'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isref;

var _isblank = require('./isblank');

var _isblank2 = _interopRequireDefault(_isblank);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ISREF returns true when the value is a reference.
function isref(value) {
  if (!value) return false;
  return value._isref === true;
} // Copyright 2015 Peter W Moresi

module.exports = exports['default'];