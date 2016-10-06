'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ifblank;

var _isblank = require('./isblank');

var _isblank2 = _interopRequireDefault(_isblank);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// IFBLANK return the `value` if non-blank, otherwise it returns `value_if_blank`.
function ifblank(value, value_if_blank) {
    return (0, _isblank2.default)(value) ? value_if_blank : value;
} // Copyright 2015 Peter W Moresi

module.exports = exports['default'];