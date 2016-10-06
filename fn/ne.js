'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ne;

var _eq = require('./eq');

var _eq2 = _interopRequireDefault(_eq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NE returns true when a is not equal to b.
function ne(a, b) {
  return !(0, _eq2.default)(a, b);
} // Copyright 2015 Peter W Moresi

module.exports = exports['default'];