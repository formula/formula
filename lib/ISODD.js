"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISODD = ISODD;
function ISODD(value) {
    return Math.floor(Math.abs(value)) & 1 ? true : false;
}