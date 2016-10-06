'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tan;

var _isnumber = require('./isnumber');

var _isnumber2 = _interopRequireDefault(_isnumber);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TAN computes the tagent of a value.
// Copyright 2015 Peter W Moresi

function tan(value) {

  if (!(0, _isnumber2.default)(value)) {
    return _error2.default.value;
  }

  return Math.tan(value);
}
module.exports = exports['default'];