'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = group;

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function group(list, field) {
  return (0, _reduce2.default)(list, function (acc, item) {
    var key = item[field];
    if (!p[key]) p[key] = [];
    p[key].push(item);
  }, {});
}
module.exports = exports['default'];