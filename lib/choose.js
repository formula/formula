"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = choose;

var _error = require("./error");

// Copyright 2015-2018 FormBucket LLC
// CHOOSE accepts an index and a list of items. It returns the item that corresponds to the index.
function choose(index) {
  // Return `#NA!` if index or items are not provided.
  if (!index || (arguments.length <= 1 ? 0 : arguments.length - 1) === 0) {
    return _error.ERRORTYPES.na;
  } // Return `#VALUE!` if index is less than 1 or greater than 254.


  if (index < 1 || index > 254) {
    return _error.ERRORTYPES.value;
  } // Return `#VALUE!` if number of items is less than index.


  if ((arguments.length <= 1 ? 0 : arguments.length - 1) < index) {
    return _error.ERRORTYPES.value;
  } // Return the item.


  return index - 1 + 1 < 1 || arguments.length <= index - 1 + 1 ? undefined : arguments[index - 1 + 1];
}
