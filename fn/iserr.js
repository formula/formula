'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = iserr;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _isnan = require('./isnan');

var _isnan2 = _interopRequireDefault(_isnan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ISERR returns true when the value is an error (except `#NA!`) or when then
// value is a number which is NaN or [-]Infinity.
// Copyright 2015 JC Fisher

function iserr(value) {
  return value && value !== _error2.default.na && value.constructor && value.constructor.name === 'Error' || typeof value === 'number' && ((0, _isnan2.default)(value) || !isFinite(value));
}
module.exports = exports['default'];