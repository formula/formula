"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISEVEN = ISEVEN;
function ISEVEN(value) {
    return Math.floor(Math.abs(value)) & 1 ? false : true;
}