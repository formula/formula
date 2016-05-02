// Copyright 2015 Peter W Moresi

// List of errors in the spreadsheet system

let nil = new Error('#NULL!'),
    div0 = new Error('#DIV/0!'),
    value = new Error('#VALUE?'),
    ref = new Error('#REF!'),
    name = new Error('#NAME?'),
    num = new Error('#NUM!'),
    na = new Error('#N/A'),
    error = new Error('#Error('),
    data = new Error('#GETTING_DATA'),
    missing = new Error('#MISSING'),
    unknown = new Error('#UNKNOWN');

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
}
