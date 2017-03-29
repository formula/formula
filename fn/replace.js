'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = replace;

var _iserror = require('./iserror');

var _iserror2 = _interopRequireDefault(_iserror);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// REPLACE returns a new string after replacing with `new_text`.
// Copyright 2015 JC Fisher

function replace(text, position, length, new_text) {

  if ((0, _iserror2.default)(position) || (0, _iserror2.default)(length) || typeof text !== 'string' || typeof new_text !== 'string') {
    return _error2.default.value;
  }
  return text.substr(0, position - 1) + new_text + text.substr(position - 1 + length);
}
module.exports = exports['default'];