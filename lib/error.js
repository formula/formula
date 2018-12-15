"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ERRORTYPES = void 0;

// Copyright 2015-2018 FormBucket LLC
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
var ERRORTYPES = {
  nil: nil,
  "#NULL!": nil,
  div0: div0,
  "#DIV/0!": div0,
  value: value,
  "#VALUE!": value,
  ref: ref,
  "#REF!": ref,
  name: name,
  "#NAME?": name,
  num: num,
  "#NUM!": num,
  na: na,
  "#N/A!": na,
  error: error,
  "#ERROR!": error,
  data: data,
  "#GETTING_DATA!": data,
  missing: missing,
  "#MISSING!": missing,
  unknown: unknown,
  "#UNKNOWN!": unknown
};
exports.ERRORTYPES = ERRORTYPES;
missing;

function _error(type) {
  return ERRORTYPES[type] || error;
}

var _default = _error;
exports.default = _default;
