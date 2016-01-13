'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VLOOKUP = VLOOKUP;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

var _ISBLANK = require('./ISBLANK');

var _ISERROR = require('./ISERROR');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function VLOOKUP(needle, table, index, exactmatch) {

    if ((0, _ISERROR.ISERROR)(needle) || (0, _ISBLANK.ISBLANK)(needle)) {
        return needle;
    }

    index = index || 0;
    exactmatch = exactmatch || false;
    for (var i = 0; i < table.length; i++) {
        var row = table[i];
        if (exactmatch && row[0] === needle || row[0] === needle || typeof row[0] === "string" && row[0].toLowerCase().indexOf(needle.toLowerCase()) != -1) {
            return index < row.length + 1 ? row[index - 1] : row[0];
        }
    }

    return _ERROR2.default.na;
}