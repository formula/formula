"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISODD = ISODD;
// Copyright 2015 Peter W Moresi

// ISODD returns true when the value is odd.
function ISODD(value) {
    return Math.floor(Math.abs(value)) & 1;
}