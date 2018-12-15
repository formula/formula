"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = match;

var _isarray = _interopRequireDefault(require("./isarray"));

var _error = require("./error");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Copyright 2015-2018 FormBucket LLC
// MATCH returns an index in `lookup_array` by searching for `lookup_reference`.
function match(lookup_value, lookup_array, matchType) {
  var lookupArray, lookupValue, index, indexValue; // Gotta have only 2 arguments folks!

  if (arguments.length === 2) {
    matchType = 1;
  } // Find the lookup value inside a worksheet cell, if needed.


  lookupValue = lookup_value; // Find the array inside a worksheet range, if needed.

  if ((0, _isarray.default)(lookup_array)) {
    lookupArray = lookup_array;
  } else {
    return _error.ERRORTYPES.na;
  } // Gotta have both lookup value and array


  if (!lookupValue && !lookupArray) {
    return _error.ERRORTYPES.na;
  } // Bail on weird match types!


  if (matchType !== -1 && matchType !== 0 && matchType !== 1) {
    return _error.ERRORTYPES.na;
  }

  for (var idx = 0; idx < lookupArray.length; idx++) {
    if (matchType === 1) {
      if (lookupArray[idx] === lookupValue) {
        return idx + 1;
      } else if (lookupArray[idx] < lookupValue) {
        if (!indexValue) {
          index = idx + 1;
          indexValue = lookupArray[idx];
        } else if (lookupArray[idx] > indexValue) {
          index = idx + 1;
          indexValue = lookupArray[idx];
        }
      }
    } else if (matchType === 0) {
      if (typeof lookupValue === "string") {
        // '?' is mapped to the regex '.'
        // '*' is mapped to the regex '.*'
        // '~' is mapped to the regex '\?'
        if (idx === 0) {
          lookupValue = "^" + lookupValue.replace(/\?/g, ".").replace(/\*/g, ".*").replace(/~/g, "\\?") + "$";
        }

        if (typeof lookupArray[idx] !== "undefined") {
          if (String(lookupArray[idx]).toLowerCase().match(String(lookupValue).toLowerCase())) {
            return idx + 1;
          }
        }
      } else {
        if (typeof lookupArray[idx] !== "undefined" && lookupArray[idx] !== null && lookupArray[idx].valueOf() === lookupValue) {
          return idx + 1;
        }
      }
    } else if (matchType === -1) {
      if (lookupArray[idx] === lookupValue) {
        return idx + 1;
      } else if (lookupArray[idx] > lookupValue) {
        if (!indexValue) {
          index = idx + 1;
          indexValue = lookupArray[idx];
        } else if (lookupArray[idx] < indexValue) {
          index = idx + 1;
          indexValue = lookupArray[idx];
        }
      }
    }
  }

  return index ? index : _error.ERRORTYPES.na;
}
