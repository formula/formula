'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CHOOSE = CHOOSE;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CHOOSE() {
  if (arguments.length < 2) {
    return _ERROR2.default.na;
  }

  var index = arguments[0];
  if (index < 1 || index > 254) {
    return _ERROR2.default.value;
  }

  if (arguments.length < index + 1) {
    return _ERROR2.default.value;
  }

  return arguments[index];
}