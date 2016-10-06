'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = vlookup;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _isblank = require('./isblank');

var _isblank2 = _interopRequireDefault(_isblank);

var _iserror = require('./iserror');

var _iserror2 = _interopRequireDefault(_iserror);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// VLOOKUP find a needle in a table searching vertically.
function vlookup(needle) {
    var table = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];
    var index = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
    var exactmatch = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];


    if ((0, _iserror2.default)(needle) || (0, _isblank2.default)(needle)) {
        return needle;
    }

    for (var i = 0; i < table.length; i++) {
        var row = table[i];

        if (index > row.length) {
            return _error2.default.ref;
        }

        if (exactmatch && row[0] === needle || row[0] == needle || typeof row[0] === "string" && row[0].toLowerCase().indexOf(needle.toLowerCase()) != -1) {
            return index < row.length + 1 ? row[index - 1] : row[0];
        }
    }

    return _error2.default.na;
} // Copyright 2015 Peter W Moresi

module.exports = exports['default'];