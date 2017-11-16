'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ceiling;

var _isnumber = require('./isnumber');

var _isnumber2 = _interopRequireDefault(_isnumber);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _numbervalue = require('./numbervalue');

var _numbervalue2 = _interopRequireDefault(_numbervalue);

var _round = require('./round');

var _round2 = _interopRequireDefault(_round);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns number rounded up, away from zero, to the nearest multiple of significance.
function ceiling(number, significance, mode) {

  significance = significance === undefined ? 1 : Math.abs(significance);
  mode = mode || 0;

  number = (0, _numbervalue2.default)(number);
  significance = (0, _numbervalue2.default)(significance);
  mode = (0, _numbervalue2.default)(mode);

  // if (utils.isAnyError(number, significance, mode)) {
  //   return error.value;
  // }

  if (significance === 0) {
    return 0;
  }

  var precision = -Math.floor(Math.log(significance) / Math.log(10));

  if (number >= 0) {
    return (0, _round2.default)(Math.ceil(number / significance) * significance, precision);
  } else {
    if (mode === 0) {
      return -(0, _round2.default)(Math.floor(Math.abs(number) / significance) * significance, precision);
    } else {
      return -(0, _round2.default)(Math.ceil(Math.abs(number) / significance) * significance, precision);
    }
  }
}
module.exports = exports['default'];