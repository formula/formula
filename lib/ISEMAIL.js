"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ISEMAIL = ISEMAIL;
function ISEMAIL(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
};