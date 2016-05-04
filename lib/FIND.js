'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FIND = FIND;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// FIND searches for text within a string
function FIND(find_text) {
  var within_text = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];
  var position = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];


  // Find the position of the text
  position = within_text.indexOf(find_text, position - 1);

  // If found return the position as base 1.
  return position === -1 ? _ERROR2.default.value : position + 1;
} // Copyright 2015 Peter W Moresi