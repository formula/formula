'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IN = IN;

var _ISARRAY = require('./ISARRAY');

// Find a needle in a lookup
function IN(needle, lookup) {

  if (arguments.length !== 2) {
    return error.na;
  }

  if (!lookupValue && !lookupArray) {
    return error.na;
  }

  if (!(0, _ISARRAY.ISARRAY)(lookup)) {
    return error.na;
  }

  lookup.some(function (n) {
    return n === needle;
  });
}