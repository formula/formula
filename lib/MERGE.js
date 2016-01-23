'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MERGE = MERGE;

var _ERROR = require('./ERROR');

// merge two array of arrays
function MERGE(setA, setB, fieldOrIndex) {

  if (setA.length !== setB.length) {
    return _ERROR.na;
  }

  var mode = typeof fieldOrIndex === 'string' ? 'field' : 'index',
      startIndex = mode === 'field' ? 1 : 0;

  return setA.map(function (item, index) {
    return Object.assign({}, item, setB[index]);
  });
}