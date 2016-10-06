'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = or;

var _isfunction = require('./isfunction');

var _isfunction2 = _interopRequireDefault(_isfunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// OR returns true when any of the criter is true or 1.
function or() {
  for (var _len = arguments.length, criteria = Array(_len), _key = 0; _key < _len; _key++) {
    criteria[_key] = arguments[_key];
  }

  return criteria.reduce(function (acc, item) {
    if (acc === true) return true;
    var value = (0, _isfunction2.default)(item) ? item() : item;
    return value === true || value === 1;
  }, false);
} // Copyright 2015 Peter W Moresi

module.exports = exports['default'];