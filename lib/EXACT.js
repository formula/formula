'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EXACT = undefined;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Exact compares two values and only returns true if they meet strict equivalence.
var EXACT = exports.EXACT = function EXACT(a, b) {
  return a === b;
}; // Copyright 2015 Peter W Moresi