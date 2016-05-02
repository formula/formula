'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ISERR = ISERR;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ISERR returns true when the value is an error (except `#NA!`) or when then
// value is a number which is NaN or [-]Infinity.
function ISERR(value) {
  return value !== _ERROR2.default.na && value.constructor.name === 'Error' || typeof value === 'number' && (Number.isNaN(value) || !Number.isFinite(value));
} // Copyright 2015 Peter W Moresi