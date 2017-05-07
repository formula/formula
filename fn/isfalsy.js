'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isfalsy;

var _isnan = require('./isnan');

var _isnan2 = _interopRequireDefault(_isnan);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns true when the value is a falsy value.
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
function isfalsy(value) {
  return value === false || value === 0 || value === '' || typeof value === 'undefined' || value === null || (0, _isnan2.default)(value);
} // Copyright 2015 JC Fisher
;
module.exports = exports['default'];