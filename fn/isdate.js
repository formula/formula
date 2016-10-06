'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = isdate;
// Copyright 2015 Peter W Moresi

// ISDATE returns true when the `value` is a JavaScript date object.
function isdate(value) {
    return value && Object.prototype.toString.call(value) == '[object Date]';
};
module.exports = exports['default'];