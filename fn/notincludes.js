'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = notincludes;

var _includes = require('./includes');

var _includes2 = _interopRequireDefault(_includes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// notincludes returns true when the searchElement is not found in the searchList.
function notincludes(searchElement, searchList, fromIndex) {
  return !(0, _includes2.default)(searchElement, searchList, fromIndex);
} // Copyright 2015 JC Fisher
module.exports = exports['default'];