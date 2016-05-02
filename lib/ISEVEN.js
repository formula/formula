"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISEVEN = ISEVEN;
// Copyright 2015 Peter W Moresi

// ISEVEN returns true when the value is even.
function ISEVEN(value) {
    return !(Math.floor(Math.abs(value)) & 1);
}