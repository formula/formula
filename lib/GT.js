'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GT = GT;

var _ISARRAY = require('./ISARRAY');

var _ISREF = require('./ISREF');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GT(a, b) {
  if ((0, _ISREF.ISREF)(a) && (0, _ISREF.ISREF)(b)) {
    return _ERROR2.default.na;
  } else if ((0, _ISARRAY.ISARRAY)(a) && (0, _ISARRAY.ISARRAY)(b)) {
    return _ERROR2.default.na;
  } else if ((0, _ISREF.ISREF)(a) || (0, _ISARRAY.ISARRAY)(a)) {
    return a.map(function (d) {
      return d > b;
    });
  } else if ((0, _ISREF.ISREF)(b) || (0, _ISARRAY.ISARRAY)(b)) {
    return b.map(function (d) {
      return d > a;
    });
  } else {
    return a > b;
  }
} // Copyright 2015 Peter W Moresi