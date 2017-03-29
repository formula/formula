'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = left;

var _isblank = require('./isblank');

var _isblank2 = _interopRequireDefault(_isblank);

var _n = require('./n');

var _n2 = _interopRequireDefault(_n);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function left(text, number) {

  if ((0, _isblank2.default)(text)) {
    return '';
  }

  if (!(0, _n2.default)(+number)) {
    return text;
  }

  return text.substring(0, number);
} // Copyright 2015 JC Fisher

module.exports = exports['default'];