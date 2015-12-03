"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISBINARY = ISBINARY;
function ISBINARY(number) {
    return (/^[01]{1,10}$/.test(number)
    );
};