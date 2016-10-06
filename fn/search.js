'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = search;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// SEARCH finds text using wildcards ?, *, ~?, and ~*.
function search(find_text, within_text, position) {
    if (!within_text) {
        return null;
    }
    position = typeof position === 'undefined' ? 1 : position;

    // The SEARCH function translated the find_text into a regex.
    var find_exp = find_text.replace(/([^~])\?/g, '$1.') // convert ? into .
    .replace(/([^~])\*/g, '$1.*') // convert * into .*
    .replace(/([~])\?/g, '\\?') // convert ~? into \?
    .replace(/([~])\*/g, '\\*'); // convert ~* into \*

    position = new RegExp(find_exp, "i").exec(within_text);

    if (position) {
        return position.index + 1;
    }
    return _error2.default.value;
} // Copyright 2015 Peter W Moresi

module.exports = exports['default'];