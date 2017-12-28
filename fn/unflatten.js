'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = unflatten;

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _isarray = require('./isarray');

var _isarray2 = _interopRequireDefault(_isarray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FLATTEN converts a nested array into a flattened array. It only supports one
// level of nesting.
function unflatten(ref) {
  var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;


  if (!(0, _isarray2.default)(ref)) {
    return _error2.default.value;
  }

  return (0, _reduce2.default)(ref, function (p, v, i) {

    if (i === 0 || i % len === 0) {
      p = p.concat([[]]);
    }

    var lastIndex = p.length - 1;

    p[lastIndex] = p[lastIndex].concat(v);

    return p;
  }, []);
} // Copyright 2015 JC Fisher
module.exports = exports['default'];