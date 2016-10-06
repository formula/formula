'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exact;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Exact compares two values and only returns true if they meet strict equivalence.
function exact(a, b) {
  return a === b;
} // Copyright 2015 Peter W Moresi

module.exports = exports['default'];