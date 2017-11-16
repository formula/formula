'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = asin;

var _isnumber = require('./isnumber');

var _isnumber2 = _interopRequireDefault(_isnumber);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Return the inverse sin of a given number
function asin(number) {

  // Ensure value is a number
  if (!(0, _isnumber2.default)(number)) {
    return _error2.default.value;
  }

  // Compute value
  return Math.asin(number);
}
module.exports = exports['default'];