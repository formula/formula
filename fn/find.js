'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = find;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FIND searches for text within a string
function find(find_text) {
  var within_text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var position = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;


  // Find the position of the text
  position = within_text.indexOf(find_text, position - 1);

  // If found return the position as base 1.
  return position === -1 ? _error2.default.value : position + 1;
} // Copyright 2015 JC Fisher

module.exports = exports['default'];