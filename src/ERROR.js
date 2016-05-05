// Copyright 2015 Peter W Moresi

// List of errors in the spreadsheet system

function FFError(message) {
    this.name = "NotImplementedError";
    this.message = (message || "");
}

FFError.prototype = Error.prototype;
FFError.prototype.toString = function() { return this.message }

let nil = new FFError('#NULL!'),
    div0 = new FFError('#DIV/0!'),
    value = new FFError('#VALUE!'),
    ref = new FFError('#REF!'),
    name = new FFError('#NAME?'),
    num = new FFError('#NUM!'),
    na = new FFError('#N/A!'),
    error = new FFError('#ERROR!'),
    data = new FFError('#GETTING_DATA!'),
    missing = new FFError('#MISSING!'),
    unknown = new FFError('#UNKNOWN!');

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
