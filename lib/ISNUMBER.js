'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISNUMBER = ISNUMBER;
function ISNUMBER(value) {
    return typeof value === 'number' && !isNaN(value) && isFinite(value);
}