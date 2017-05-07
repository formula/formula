'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flatten;

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _isarray = require('./isarray');

var _isarray2 = _interopRequireDefault(_isarray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FLATTEN converts a nested array into a flattened array. It only supports one
// level of nesting.
function flatten(ref) {

  if (!(0, _isarray2.default)(ref)) {
    return _error2.default.value;
  }

  return (0, _reduce2.default)(ref, function (a, b) {
    return a.concat(b);
  }, []);
} // Copyright 2015 JC Fisher
module.exports = exports['default'];