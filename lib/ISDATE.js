'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISDATE = ISDATE;
function ISDATE(d) {
    return d && Object.prototype.toString.call(d) == '[object Date]';
};