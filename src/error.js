// Copyright 2015-2018 FormBucket LLC

// List of errors in the spreadsheet system

function FormulaError(name, message) {
  this.name = name || "NotImplementedError";
  this.message = message || "";
}

FormulaError.prototype = Error.prototype;
FormulaError.prototype.toString = function() {
  return this.name;
};

let nil = new FormulaError("#NULL!", "Null reference"),
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

export let ERRORTYPES = {
  nil,
  "#NULL!": nil,
  div0,
  "#DIV/0!": div0,
  value,
  "#VALUE!": value,
  ref,
  "#REF!": ref,
  name,
  "#NAME?": name,
  num,
  "#NUM!": num,
  na,
  "#N/A!": na,
  error,
  "#ERROR!": error,
  data,
  "#GETTING_DATA!": data,
  missing,
  "#MISSING!": missing,
  unknown,
  "#UNKNOWN!": unknown
};
missing;

function _error(type) {
  return ERRORTYPES[type] || error;
}

export default _error;
