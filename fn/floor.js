'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = floor;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function floor(value, significance) {
  significance = significance || 1;

  if (value > 0 && significance < 0) {
    return _error2.default.num;
  }

  if (value >= 0) {
    return Math.floor(value / significance) * significance;
  } else {
    return Math.ceil(value / significance) * significance;
  }
}
module.exports = exports['default'];