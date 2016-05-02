'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISNUMBER = ISNUMBER;
// Copyright 2015 Peter W Moresi

// Returns true when the value is a finite number.
function ISNUMBER(value) {
    return typeof value === 'number' && !isNaN(value) && isFinite(value);
}