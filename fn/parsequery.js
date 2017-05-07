'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = parsequery;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// parse querystring into object
// Copyright 2015 JC Fisher

function parsequery() {
  var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';


  if (typeof query !== 'string') {
    return _error2.default.na;
  }

  if (query.length === 0) {
    return {};
  }

  return (0, _reduce2.default)((query[0] === '?' ? query.substr(1) : query).split('&'), function (acc, item) {
    var n = item.split('=');
    var key = decodeURIComponent(n[0]);
    var value = decodeURIComponent(n[1] || '');
    acc[key] = value;
    return acc;
  }, {});
}
module.exports = exports['default'];