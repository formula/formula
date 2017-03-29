'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = join;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// combine a array of strings/numbers into a single string
function join(list) {
  var delim = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ', ';


  // all values must be string or number
  if (list.some(function (d) {
    return typeof d !== 'string' && typeof d !== 'number';
  })) {
    return _error2.default.value;
  }

  // defer to JS implementation
  return list.join(delim);
} // Copyright 2015 JC Fisher

module.exports = exports['default'];