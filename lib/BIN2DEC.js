"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BIN2DEC = BIN2DEC;

var _ERROR = require("./ERROR");

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BIN2DEC(value) {
    var valueAsString;

    if (typeof value === "string") {
        valueAsString = value;
    } else if (typeof value !== "undefined") {
        valueAsString = value.toString();
    } else {
        return _ERROR2.default.NA;
    }

    if (valueAsString.length > 10) return _ERROR2.default.NUM;

    // we subtract 512 when the leading number is 0.
    if (valueAsString.length === 10 && valueAsString[0] === '1') {
        return parseInt(valueAsString.substring(1), 2) - 512;
    }

    // Convert binary number to decimal with built-in facility
    return parseInt(valueAsString, 2);
};