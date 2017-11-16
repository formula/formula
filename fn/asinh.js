'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = asinh;

var _isnumber = require('./isnumber');

var _isnumber2 = _interopRequireDefault(_isnumber);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Return the inverse hyperbolic sin of a given number
function asinh(number) {

  // Ensure value is a number
  if (!(0, _isnumber2.default)(number)) {
    return _error2.default.value;
  }

  // Compute value
  return Math.log(number + Math.sqrt(number * number + 1));
}
module.exports = exports['default'];