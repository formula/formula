"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Copyright 2015 JC Fisher

// List of errors in the spreadsheet system

function FormulaError(name, message) {
  this.name = name || "NotImplementedError";
  this.message = message || "";
}

FormulaError.prototype = Error.prototype;
FormulaError.prototype.toString = function () {
  return this.name;
};

var nil = new FormulaError("#NULL!", "Null reference"),
    div0 = new FormulaError("#DIV/0!", "Divide by zero"),
    value = new FormulaError("#VALUE!", "Invalid value"),
    ref = new FormulaError("#REF!", "Invalid reference"),
    name = new FormulaError("#NAME?", "Invalid name"),
    num = new FormulaError("#NUM!", "Invalid number"),
    na = new FormulaError("#N/A!", "Not applicable"),
    error = new FormulaError("#ERROR!", "Error"),
    data = new FormulaError("#GETTING_DATA!", "Error getting data"),
    missing = new FormulaError("#MISSING!", "Missing"),
    unknown = new FormulaError("#UNKNOWN!", "Unknown error");

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