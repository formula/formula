'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = code;

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// CODE accepts text and optionally index (default 1) returning the character code.
function code() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var index = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

  if (index < 1) return _error2.default.na;
  if (text.length < index) return _error2.default.value;
  return text.charCodeAt(index - 1);
} // Copyright 2015 JC Fisher

module.exports = exports['default'];