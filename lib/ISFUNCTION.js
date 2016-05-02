'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISFUNCTION = ISFUNCTION;
// Copyright 2015 Peter W Moresi

// ISFUNCTION returns true when `value` is a function.
function ISFUNCTION(value) {
    return value && Object.prototype.toString.call(value) == '[object Function]';
};