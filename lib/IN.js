'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONTAINS = undefined;
exports.IN = IN;

var _ISBLANK = require('./ISBLANK');

var _ISARRAY = require('./ISARRAY');

var _EQ = require('./EQ');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// INT returns true when a needle is found in a lookup.
// Copyright 2015 Peter W Moresi

function IN(needle, lookup) {

  // Return `#NA!` when the needle and lookup are blank.
  if ((0, _ISBLANK.ISBLANK)(needle) && (0, _ISBLANK.ISBLANK)(lookup)) {
    return _ERROR2.default.na;
  }

  // Return `#NA!` when the lookup is not an array.
  if (!(0, _ISARRAY.ISARRAY)(lookup)) {
    return _ERROR2.default.na;
  }

  // Return true when some of the values match the needle.
  return lookup.some(function (n) {
    return (0, _EQ.EQ)(n, needle);
  });
}

// ALIAS CONTAINS
var CONTAINS = exports.CONTAINS = IN;