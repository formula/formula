'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// merge two array of arrays
function merge(setA, setB, fieldOrIndex) {

  if (setA.length !== setB.length) {
    return _error2.default;
  }

  var mode = typeof fieldOrIndex === 'string' ? 'field' : 'index',
      startIndex = mode === 'field' ? 1 : 0;

  return setA.map(function (item, index) {
    return Object.assign({}, item, setB[index]);
  });
} // Copyright 2015 Peter W Moresi

module.exports = exports['default'];