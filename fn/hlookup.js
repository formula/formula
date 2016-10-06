'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = hlookup;

var _isblank = require('./isblank');

var _isblank2 = _interopRequireDefault(_isblank);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Find a needle in a table searching horizontally.
// Copyright 2015 Peter W Moresi

function hlookup(needle, table) {
    var index = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
    var exactmatch = arguments[3];

    if (typeof needle === "undefined" || (0, _isblank2.default)(needle)) {
        return null;
    }

    if (index > table.length) {
        return _error2.default.ref;
    }

    var needleLower = (needle + '').toLowerCase(),
        row = table[0];

    for (var i = 0; i < row.length; i++) {

        if (exactmatch && row[i] === needle || row[i] == needle || typeof row[i] === "string" && row[i].toLowerCase().indexOf(needleLower) != -1) {
            return table[index - 1][i];
        }
    }

    return _error2.default.na;
}
module.exports = exports['default'];