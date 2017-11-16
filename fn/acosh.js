'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = acosh;

var _isnumber = require('./isnumber');

var _isnumber2 = _interopRequireDefault(_isnumber);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns the hyperbolic inverser cosine of a value.
function acosh(value) {

  if (!(0, _isnumber2.default)(value)) {
    return _error2.default.value;
  }

  return Math.log(value + Math.sqrt(value * value - 1));
};
module.exports = exports['default'];