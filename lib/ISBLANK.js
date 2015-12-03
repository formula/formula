'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISBLANK = ISBLANK;
function ISBLANK(value) {
    return typeof value === 'undefined' || value === null;
};