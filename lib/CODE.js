'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CODE = CODE;

var _ERROR = require('./ERROR');

var _ERROR2 = _interopRequireDefault(_ERROR);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CODE accepts text and optionally index (default 1) returning the character code.
function CODE() {
  var text = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var index = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];

  if (index < 1) return _ERROR2.default.na;
  if (text.length < index) return _ERROR2.default.value;
  return text.charCodeAt(index - 1);
} // Copyright 2015 Peter W Moresi