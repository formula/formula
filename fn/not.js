'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = not;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// NOT negates a `value`
function not(value) {
  return value !== true && value !== false && value !== 1 && value !== 0 ? _error2.default.value : !value;
} // Copyright 2015 JC Fisher
module.exports = exports['default'];