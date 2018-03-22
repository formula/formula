// Copyright 2015 JC Fisher

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

export default {
  nil,
  div0,
  value,
  ref,
  name,
  num,
  na,
  error,
  data,
  missing,
  unknown
};
