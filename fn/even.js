'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = even;

var _ceiling = require('./ceiling');

var _ceiling2 = _interopRequireDefault(_ceiling);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Returns number rounded up to the nearest even integer.
function even(number) {
  // TBD: error cases
  return (0, _ceiling2.default)(number, -2, -1);
}
module.exports = exports['default'];