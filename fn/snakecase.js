'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = snakecase;

var _istext = require('./istext');

var _istext2 = _interopRequireDefault(_istext);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// convert camelcase to snakecase.
// Copyright 2015 JC Fisher

function snakecase(value) {

  // Return `#VALUE!` if not text input.
  if (!(0, _istext2.default)(value)) {
    return _error2.default.value;
  }

  // credit: prototype.js
  return value.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/-/g, '_').toLowerCase();
}
module.exports = exports['default'];