'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = iserr;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ISERR returns true when the value is an error (except `#NA!`) or when then
// value is a number which is NaN or [-]Infinity.
function iserr(value) {
  return value !== _error2.default.na && value.constructor.name === 'Error' || typeof value === 'number' && (Number.isNaN(value) || !Number.isFinite(value));
} // Copyright 2015 Peter W Moresi

module.exports = exports['default'];