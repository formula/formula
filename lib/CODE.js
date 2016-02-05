'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CODE = CODE;
function CODE() {
  var text = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var index = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

  return text.charCodeAt(index);
}