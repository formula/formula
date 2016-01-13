'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SUM = SUM;

var _FLATTEN = require('./FLATTEN');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Author: Peter Moresi
function SUM() {
  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return (0, _FLATTEN.FLATTEN)((0, _FLATTEN.FLATTEN)(numbers)).reduce(function (a, b) {
    if (typeof b !== 'number') {
      return _ERROR2.default.value;
    }
    return a + b;
  });
}