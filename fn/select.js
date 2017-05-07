'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // Copyright 2015 JC Fisher


exports.default = select;

var _isarray = require('./isarray');

var _isarray2 = _interopRequireDefault(_isarray);

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// SELECT fields from object
function select(fields, body) {
  // non-json
  if (!body || 'object' != (typeof body === 'undefined' ? 'undefined' : _typeof(body))) return;

  // check for fields
  if (!fields) return;

  // split
  if ('string' == typeof fields) fields = fields.split(/ *, */);

  // fields array
  if ((0, _isarray2.default)(body)) {
    return body.map(function (obj) {
      return (0, _reduce2.default)(fields, function (ret, key) {
        ret[key] = obj[key];
        return ret;
      }, {});
    });

    return;
  }

  // fields object
  return (0, _reduce2.default)(fields, function (ret, key) {
    ret[key] = body[key];
    return ret;
  }, {});
}
module.exports = exports['default'];