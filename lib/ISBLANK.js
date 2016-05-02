'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISBLANK = ISBLANK;
// Copyright 2015 Peter W Moresi

// ISBLANK returns true when the value is undefined or null.
function ISBLANK(value) {
    return typeof value === 'undefined' || value === null;
};