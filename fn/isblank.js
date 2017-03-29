'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isblank;
// Copyright 2015 JC Fisher

// ISBLANK returns true when the value is undefined or null.
function isblank(value) {
    return typeof value === 'undefined' || value === null;
};
module.exports = exports['default'];