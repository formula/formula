"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HLOOKUP = HLOOKUP;

var _ISBLANK = require("./ISBLANK");

// HLOOKUP searches for a needle across the rows.
function HLOOKUP(needle, table, index, exactmatch) {
    if (typeof needle === "undefined" || (0, _ISBLANK.ISBLANK)(needle)) {
        return null;
    }

    var index = index || 0,
        row = table[0];

    for (var i = 0; i < row.length; i++) {

        if (exactmatch && row[i] === needle || row[i].toLowerCase().indexOf(needle.toLowerCase()) !== -1) {
            return index < table.length + 1 ? table[index - 1][i] : table[0][i];
        }
    }

    return error.na;
} // Copyright 2015 Peter W Moresi