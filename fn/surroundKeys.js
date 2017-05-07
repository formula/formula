'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = surroundKeys;

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _keys = require('./keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Creates a new object where all of the keys are surrounded by
// start and end delimiters.
// Copyright 2015 JC Fisher
function surroundKeys(obj) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
  var end = arguments[2];

  end = end || start;
  return (0, _reduce2.default)((0, _keys2.default)(obj), function (p, v) {
    p['' + start + v + end] = obj[v];
    return p;
  }, {});
}
module.exports = exports['default'];