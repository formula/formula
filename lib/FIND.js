'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FIND = FIND;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FIND(find_text, within_text, position) {
  if (!within_text) {
    return null;
  }
  position = typeof position === 'undefined' ? 1 : position;
  position = within_text.indexOf(find_text, position - 1) + 1;
  return position === 0 ? _ERROR2.default.value : position;
}