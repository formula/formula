'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = merge;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _assign = require('./assign');

var _assign2 = _interopRequireDefault(_assign);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// merge two array of arrays
function merge(setA, setB, fieldOrIndex) {

  if (setA.length !== setB.length) {
    return _error2.default;
  }

  var mode = typeof fieldOrIndex === 'string' ? 'field' : 'index',
      startIndex = mode === 'field' ? 1 : 0;

  return (0, _map2.default)(setA, function (item, index) {
    return (0, _assign2.default)({}, item, setB[index]);
  });
} // Copyright 2015 JC Fisher

module.exports = exports['default'];