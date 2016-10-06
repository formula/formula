'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = get;

var _isblank = require('./isblank');

var _isblank2 = _interopRequireDefault(_isblank);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// get a property (p) from an object (o)
function get(p, o) {
  return o[p];
}
module.exports = exports['default'];