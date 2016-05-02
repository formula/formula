'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RIGHT = RIGHT;

var _ISBLANK = require('./ISBLANK');

var _N = require('./N');

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// RIGHT pulls a given number of character from the right side of `text`.
function RIGHT(text, number) {

  if ((0, _ISBLANK.ISBLANK)(text)) {
    return '';
  }

  if (!(0, _N.N)(+number)) {
    return text;
  }

  return text.substring(text.length - number);
} // Copyright 2015 Peter W Moresi