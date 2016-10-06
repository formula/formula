'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ifempty;

var _isempty = require('./isempty');

var _isempty2 = _interopRequireDefault(_isempty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// IFBLANK return the `value` if empty, otherwise it returns `value_if_empty`.
function ifempty(value, value_if_empty) {
    return (0, _isempty2.default)(value) ? value_if_empty : value;
} // Copyright 2015 Peter W Moresi

module.exports = exports['default'];