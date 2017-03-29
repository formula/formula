"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
// Copyright 2015 JC Fisher

// List of errors in the spreadsheet system

function FFError(message, name) {
    this.name = name || "NotImplementedError";
    this.message = message || "";
}

FFError.prototype = Error.prototype;
FFError.prototype.toString = function () {
    return this.message;
};

var nil = new FFError('#NULL!', "Null reference"),
    div0 = new FFError('#DIV/0!', "Divide by zero"),
    value = new FFError('#VALUE!', "Invalid value"),
    ref = new FFError('#REF!', "Invalid reference"),
    name = new FFError('#NAME?', "Invalid name"),
    num = new FFError('#NUM!', "Invalid number"),
    na = new FFError('#N/A!', "Not applicable"),
    error = new FFError('#ERROR!', "Error"),
    data = new FFError('#GETTING_DATA!', "Error getting data"),
    missing = new FFError('#MISSING!', "Missing"),
    unknown = new FFError('#UNKNOWN!', "Unknown error");

exports.default = {
    nil: nil,
    div0: div0,
    value: value,
    ref: ref,
    name: name,
    num: num,
    na: na,
    error: error,
    data: data,
    missing: missing,
    unknown: unknown
};
module.exports = exports["default"];