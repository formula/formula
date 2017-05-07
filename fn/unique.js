'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unique;

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// UNIQUE reduces an `array` into an array without duplicate values.
function unique(array) {
  return (0, _reduce2.default)(array, function (p, c) {
    if (p.indexOf(c) < 0) p.push(c);
    return p;
  }, []);
} // Copyright 2015 JC Fisher
module.exports = exports['default'];