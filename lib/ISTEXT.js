'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISTEXT = ISTEXT;
// Copyright 2015 Peter W Moresi

// ISTEXT returns true when the value is a string.
function ISTEXT(value) {
    return 'string' === typeof value;
};