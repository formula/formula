'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = trim;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TRIMS returns a string without whitespace at the beginning or end.
function trim(text) {
    if (typeof text !== 'string') {
        return _error2.default.value;
    }
    return text.trim();
} // Copyright 2015 Peter W Moresi

module.exports = exports['default'];