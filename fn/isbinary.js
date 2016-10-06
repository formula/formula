"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isbinary;
// Copyright 2015 Peter W Moresi

// ISBINARY returns true when the string is 1 to 10 characters in length and
// only contains 1 or 0s.
function isbinary(number) {
    return (/^[01]{1,10}$/.test(number)
    );
};
module.exports = exports["default"];