"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISBINARY = ISBINARY;
// Copyright 2015 Peter W Moresi

// ISBINARY returns true when the string is 1 to 10 characters in length and
// only contains 1 or 0s.
function ISBINARY(number) {
    return (/^[01]{1,10}$/.test(number)
    );
};