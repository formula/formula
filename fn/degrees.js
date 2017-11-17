'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = degrees;

var _isnumber = require('./isnumber');

var _isnumber2 = _interopRequireDefault(_isnumber);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Converts radians into degrees.
function degrees(number) {

  // Ensure value is a number
  if (!(0, _isnumber2.default)(number)) {
    return _error2.default.value;
  }

  // Compute value
  return number * 180 / Math.PI;
}
module.exports = exports['default'];