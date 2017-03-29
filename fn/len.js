'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = len;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// LEN returns the size of a string or array.
function len(text) {
  if (arguments.length === 0) {
    return _error2.default.error;
  }

  if (typeof text === 'string') {
    return text.length;
  }

  if (text.length) {
    return text.length;
  }

  return _error2.default.value;
} // Copyright 2015 JC Fisher

;
module.exports = exports['default'];