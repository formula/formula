"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = iseven;
// Copyright 2015 Peter W Moresi

// ISEVEN returns true when the value is even.
function iseven(value) {
    return !(Math.floor(Math.abs(value)) & 1);
}
module.exports = exports["default"];