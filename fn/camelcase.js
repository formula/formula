'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelcase;

var _istext = require('./istext');

var _istext2 = _interopRequireDefault(_istext);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// convert snakecase to camelcase.
// Copyright 2015 JC Fisher

function camelcase(value) {

  // Return `#VALUE!` if not text input.
  if (!(0, _istext2.default)(value)) {
    return _error2.default.value;
  }

  // converts -c into C and _c in C for every matched character.
  return value.replace(/-+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : '';
  }).replace(/_+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : '';
  });
}
module.exports = exports['default'];