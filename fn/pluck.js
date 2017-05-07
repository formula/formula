'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = pluck;

var _isarray = require('./isarray');

var _isarray2 = _interopRequireDefault(_isarray);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _map = require('./map');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// pluck a property from a list of objects.
function pluck(prop, list) {

  // Ensure that the list is an array.
  if (!(0, _isarray2.default)(list)) {
    return _error2.default.na;
  }

  // Map the list to the property.
  return (0, _map2.default)(list, function (d) {
    return d[prop];
  });
} // Copyright 2015 JC Fisher

module.exports = exports['default'];