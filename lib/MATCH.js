'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MATCH = MATCH;

var _ISARRAY = require('./ISARRAY');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// MATCH returns an index in `array_reference` by searching for `lookup_reference`.
// Copyright 2015 Peter W Moresi

function MATCH(lookup_reference, array_reference, matchType) {

  var lookupArray, lookupValue, index, indexValue;

  // Gotta have only 2 arguments folks!
  if (arguments.length === 2) {
    matchType = 1;
  }

  // Find the lookup value inside a worksheet cell, if needed.
  lookupValue = lookup_reference;

  // Find the array inside a worksheet range, if needed.
  if ((0, _ISARRAY.ISARRAY)(array_reference)) {
    lookupArray = array_reference;
  } else {
    return _ERROR2.default.na;
  }

  // Gotta have both lookup value and array
  if (!lookupValue && !lookupArray) {
    return _ERROR2.default.na;
  }

  // Bail on weird match types!
  if (matchType !== -1 && matchType !== 0 && matchType !== 1) {
    return _ERROR2.default.na;
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
      if (typeof lookupValue === 'string') {
        // '?' is mapped to the regex '.'
        // '*' is mapped to the regex '.*'
        // '~' is mapped to the regex '\?'
        if (idx === 0) {
          lookupValue = "^" + lookupValue.replace(/\?/g, '.').replace(/\*/g, '.*').replace(/~/g, '\\?') + "$";
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

  return index ? index : _ERROR2.default.na;
};