'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONTAINS = undefined;
exports.IN = IN;

var _ISBLANK = require('./ISBLANK');

var _ISARRAY = require('./ISARRAY');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Find a needle in a lookup
function IN(needle, lookup) {

  if ((0, _ISBLANK.ISBLANK)(needle) && (0, _ISBLANK.ISBLANK)(lookup)) {
    return _ERROR2.default.na;
  }

  if (!(0, _ISARRAY.ISARRAY)(lookup)) {
    return _ERROR2.default.na;
  }

  return lookup.some(function (n) {
    return n === needle;
  });
}

var CONTAINS = exports.CONTAINS = IN;