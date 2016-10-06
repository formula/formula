'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isna;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ISNA returns true when the value is `#NA!`
function isna(value) {
  return value === _error2.default.na;
} // Copyright 2015 Peter W Moresi

module.exports = exports['default'];