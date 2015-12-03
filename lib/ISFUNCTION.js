'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISFUNCTION = ISFUNCTION;
function ISFUNCTION(f) {
    return f && Object.prototype.toString.call(f) == '[object Function]';
};