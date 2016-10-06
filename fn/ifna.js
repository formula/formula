'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ifna;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// IFBLANK return the `value` if `#NA!`, otherwise it returns `value_if_na`.
function ifna(value, value_if_na) {
    return value === _error2.default.na ? value_if_na : value;
} // Copyright 2015 Peter W Moresi

module.exports = exports['default'];