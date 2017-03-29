'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isfunction;
// Copyright 2015 JC Fisher

// ISFUNCTION returns true when `value` is a function.
function isfunction(value) {
    return value && Object.prototype.toString.call(value) == '[object Function]';
};
module.exports = exports['default'];