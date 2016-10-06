'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = istext;
// Copyright 2015 Peter W Moresi

// ISTEXT returns true when the value is a string.
function istext(value) {
    return 'string' === typeof value;
};
module.exports = exports['default'];